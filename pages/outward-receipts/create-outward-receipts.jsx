import React, { useEffect, useState } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { Radio, Input, Space } from 'antd';
import { toggleDrawerMenu } from '~/store/app/action';
import { useRouter } from 'next/router';
import { getCustomers, postReceipts } from '~/networks/api';

const CreateProductPage = () => {

    const router = useRouter()

    const [customers, setCustomers] = useState([])


    const dispatch = useDispatch();
    const [rnumber, setRnumber] = useState(0)
    const [paymentNotes, setPaymentNotes] = useState("")
    const [receiptDate, setReceiptDate] = useState(new Date)
    const [companyName, setCompanyName] = useState("")
    const [companyData, setCompanyData] = useState({})
    const [amount, setAmount] = useState(0)
    const [paymentOption, setPaymentOption] = useState("")
    const [ptype, setPtype] = useState("")

    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
        loadCustomerData()
    }, []);


    useEffect(() => {
        console.log(companyName);
        const companyDetails = customers.filter((data) => (data.id == companyName))
        console.log(companyDetails[0])
        setCompanyData(companyDetails[0]);
    }, [companyName])


    const loadCustomerData = async () => {
        const res = await getCustomers();
        console.log(res.data);
        setCustomers(res.data)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            number: rnumber,
            customer: companyName,
            amount,
            type: 'outward_receipts',
            payment_date: receiptDate,
            payment_option: paymentOption,
            product_type: ptype,
            payment_notes: paymentNotes,

        }


        const res = await postReceipts(data);
        console.log(res.data);

    }

    return (
        <ContainerDefault title="Create new Outward Receipt">
            <HeaderDashboard
                title="Outward Receipt"
                description="InvoiceDF Create New Outward Receipt "
            />
            <section className="ps-new-item">
                <form
                    onSubmit={e => handleSubmit(e)}
                    className="ps-form ps-form--new-product">
                    <div className="ps-form__content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>General</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>
                                                Receipt Number<sup>*</sup>
                                            </label>
                                            <input
                                                value={rnumber}
                                                className="form-control"
                                                onChange={e => setRnumber(parseInt(e.target.value))}
                                                type="number"
                                                placeholder="Enter product name..."
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>
                                                Company Name<sup>*</sup>
                                            </label>
                                            <select className="form-control" onChange={e => setCompanyName(e.target.value)}
                                            >
                                                <option value="">Select Customers</option>
                                                {

                                                    customers.map((data, key) => (

                                                        <option key={data.id} value={data.id}>{data.customer_name}</option>
                                                    ))

                                                }
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                GST/PAN Number<sup>*</sup>
                                            </label>
                                            <input
                                                value={companyData ? companyData.gst_number : ""}
                                                className="form-control"
                                                readOnly={true}
                                                type="text"
                                                placeholder="Enter product name..."
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Address
                                            </label>
                                            <textarea
                                                className="form-control"
                                                readOnly={true}
                                                value={
                                                    companyData ? companyData.address + ', ' +
                                                        companyData.landmark + ', ' +
                                                        companyData.city + ', ' +
                                                        companyData.state + ', ' +
                                                        "India." : ""
                                                }
                                                rows="5"
                                                name="editordata"></textarea>
                                        </div>

                                    </div>
                                </figure>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>Payment</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>Amount</label>
                                            <input
                                                value={amount}
                                                onChange={e => setAmount(parseInt(e.target.value))}
                                                placeholder="values in (₹)"
                                                className="form-control"
                                                type="number"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>
                                                Payment Date
                                                <sup>*</sup>
                                            </label>
                                            <input
                                                value={receiptDate}
                                                onChange={e => setReceiptDate(e.target.value)}
                                                className="form-control"
                                                type="date"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ marginRight: 10 }}>
                                                Payment Option
                                                <sup>*</sup>
                                            </label>

                                            <Radio.Group onChange={e => setPaymentOption(e.target.value)} value={paymentOption}>
                                                <Space direction="vertical">
                                                    <Radio value="on_account">On Account</Radio>
                                                    <Radio value="on_invoice">On Invoice</Radio>

                                                </Space>
                                            </Radio.Group>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Payment Type<sup>*</sup>
                                            </label>
                                            <select className="form-control"
                                                onChange={e => setPtype(e.target.value)}
                                            >
                                                <option value="">Select Type</option>
                                                <option value="cash">Cash</option>
                                                <option value="cheque">Cheque</option>
                                                <option value="online">Online/Transfer</option>
                                                <option value="bank">Bank/Transfer</option>
                                                <option value="tds">TDS</option>
                                                <option value="bad_debts">Bad Debts/Kasar</option>
                                                <option value="csl">Currency Exchange Loss</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Payment Notes
                                            </label>
                                            <textarea
                                                value={paymentNotes}
                                                onChange={e => setPaymentNotes(e.target.value)}
                                                className="form-control"
                                                rows="2"
                                                name="editordata"></textarea>
                                        </div>
                                    </div>
                                </figure>

                            </div>
                        </div>
                    </div>
                    <div className="ps-form__bottom">
                        <a
                            className="ps-btn ps-btn--black"
                            href="#" onClick={() => router.back()}>
                            Back
                        </a>
                        <button type="submit" className="ps-btn">Submit</button>
                    </div>
                </form>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CreateProductPage);
