import React, { useEffect, useState } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { Radio, Input, Space } from 'antd';
import { toggleDrawerMenu } from '~/store/app/action';
import { useRouter } from 'next/router';
import axios from 'axios';
import { getCustomers } from '~/networks/api';
import { Select } from 'antd';
// import TableSalesInvoiceBill from '~/components/shared/tables/TableSalesInvoiceBill';
import { BasicTable } from '~/components/Table/BasicTable'
// import {FilteringTable} from '~/components/Table/FiltertingTable'
const CreateProductPage = () => {

    const { Option } = Select;
    const router = useRouter()

    const dispatch = useDispatch();
    const [transports, setTransports] = useState([])
    const [transport, setTransport] = useState(0)
    const [transportData, setTransportData] = useState({})
    const [rnumber, setRnumber] = useState(0)
    const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().slice(0, 10))
    const [poDate, setPoDate] = useState(new Date)
    const [ewayDate, setEwayDate] = useState(new Date().toISOString().slice(0, 10))
    const [challanDate, setChallanDate] = useState(new Date)
    const [customers, setCustomers] = useState([])
    const [invoiceNumber, setInvoiceNumber] = useState(0)
    const [challanNumber, setChallanNumber] = useState(0)
    const [companyName, setCompanyName] = useState("")
    const [rnote, setRnote] = useState("")
    const [hsn, setHsnCode] = useState("")
    const [unitOfMeasure, setUnitOfMeasure] = useState("")
    const [paymentOption, setPaymentOption] = useState("")
    const [ptype, setPtype] = useState("")
    const [cgst, setCgst] = useState(0)
    const [sgst, setSgst] = useState(0)
    const [igst, setIgst] = useState(0)
    const [companyData, setCompanyData] = useState({})
    const [cessPer, setCessPer] = useState(0)
    const [cessAmt, setCessAmt] = useState(0)
    const [sellPrice, setSellPrice] = useState(0)
    const [sellPriceWithTax, setSellPriceWithTax] = useState(0)
    const [purchasePrice, setPurchasePrice] = useState(0)
    const [purchasePriceWithTax, setPurchasePriceWithTax] = useState(0)

    useEffect(() => {
        dispatch(toggleDrawerMenu(false));

        fetchUserCustomers()
        fetchInvoiceData()
        fetchTransports()


    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    console.log(companyName)


    async function fetchInvoiceData() {
        const res = await axios.get('http://127.0.0.1:1338/invoices/count')
        setInvoiceNumber(res.data + 1)
    }
    async function fetchTransports() {
        const res = await axios.get('http://127.0.0.1:1338/transports')
        setTransports(res.data)
    }

    const fetchUserCustomers = async () => {
        const res = await getCustomers()
        setCustomers(res.data)

    }
    useEffect(() => {
        console.log(companyName);
        const companyDetails = customers.filter((data) => (data.id == companyName))
        console.log(companyDetails[0])
        setCompanyData(companyDetails[0]);
    }, [companyName])
    useEffect(() => {
        console.log(transport);
        const transportDetails = transports.filter((data) => (data.id === transport))
        console.log(transportDetails)
        // setTransportData(transportDetails[0]);
    }, [transport])



    return (
        <ContainerDefault title="Create new Sales Invoice">
            <HeaderDashboard
                title="Sales Invoice"
                description="InvoiceDF Create New Sales Invoice "
            />
            <section className="ps-new-item">
                <form
                    onSubmit={e => handleSubmit(e)}
                    className="ps-form ps-form--new-product">
                    <div className="ps-form__content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>Customer Information</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>
                                                M/S.<sup>*</sup>
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
                                                Phone Number<sup>*</sup>
                                            </label>
                                            <input
                                                // {changes}
                                                value={companyData ? companyData.gst_number : ""}
                                                className="form-control"
                                                readOnly={true}
                                                type="text"
                                                placeholder="Enter product name..."
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Rev. Charge<sup>*</sup>
                                            </label>
                                            <div className="form-group">
                                                <Select
                                                    className="ps-ant-dropdown"
                                                    listItemHeight={20}>
                                                    <Option value="active">Yes</Option>
                                                    <Option value="in-active">
                                                        No
                                                    </Option>
                                                </Select>
                                            </div>
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
                                    <figcaption>Invoice Details</figcaption>
                                    <div className="ps-block__content">
                                        <div className="row">
                                            <div className="form-group" style={{ marginRight: 25 }}>
                                                <label>Invoice Number</label>
                                                <input
                                                    value={invoiceNumber}
                                                    onChange={e => setInvoiceNumber(parseInt(e.target.value))}
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>

                                            <div className="form-group" style={{ marginLeft: 25 }}>
                                                <label>
                                                    Invoice Date
                                                    <sup>*</sup>
                                                </label>
                                                <input
                                                    value={invoiceDate}
                                                    onChange={e => setInvoiceDate(e.target.value)}
                                                    className="form-control"
                                                    type="date"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group" style={{ marginRight: 25 }}>
                                                <label>Challan Number</label>
                                                <input
                                                    value={challanNumber}
                                                    onChange={e => setChallanNumber(parseInt(e.target.value))}
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>

                                            <div className="form-group" style={{ marginLeft: 25 }}>
                                                <label>
                                                    Challan Date
                                                    <sup>*</sup>
                                                </label>
                                                <input
                                                    value={challanDate}
                                                    onChange={e => setChallanDate(e.target.value)}
                                                    className="form-control"
                                                    type="date"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group" style={{ marginRight: 25 }}>
                                                <label>P.O. Number</label>
                                                <input
                                                    value={invoiceNumber}
                                                    onChange={e => setInvoiceNumber(parseInt(e.target.value))}
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>

                                            <div className="form-group" style={{ marginLeft: 25 }}>
                                                <label>
                                                    P.O. Date
                                                    <sup>*</sup>
                                                </label>
                                                <input
                                                    value={poDate}
                                                    onChange={e => setPoDate(e.target.value)}
                                                    className="form-control"
                                                    type="date"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group" style={{ marginRight: 25 }}>
                                                <label>L.O. Number</label>
                                                <input
                                                    value={challanNumber}
                                                    onChange={e => setChallanNumber(parseInt(e.target.value))}
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>

                                            <div className="form-group" style={{ marginLeft: 25 }}>
                                                <label>
                                                    E-Way Date
                                                    <sup>*</sup>
                                                </label>
                                                <input
                                                    value={ewayDate}
                                                    onChange={e => setEwayDate(e.target.value)}
                                                    className="form-control"
                                                    type="date"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                DISPATCH THROUGH<sup>*</sup>
                                            </label>
                                            <select className="form-control" onChange={e => setTransport(e.target.value)}
                                            >
                                                <option value="">Select Transports</option>
                                                {

                                                    transports.map((data, key) => (

                                                        <option key={data.id} value={data.id}>{data.name}</option>
                                                    ))

                                                }
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="form-group" style={{ marginRight: 25 }}>
                                                <label>Transport ID</label>
                                                <input
                                                    disabled={true}
                                                    value={transport}
                                                    onChange={e => setTransport(parseInt(e.target.value))}
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>

                                            <div className="form-group" style={{ marginRight: 25 }}>
                                                <label>Vehicle Number</label>
                                                <input
                                                    // value={transportData.vehicle_no}
                                                    disabled={true}
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </figure>

                            </div>

                            {/* <form
                                onSubmit={e => handleSubmit(e)}
                                className="ps-form ps-form--new-product">
                                <div className="table-responsive">
                                    <table className="table ps-table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Phone Number</th>
                                                <th>Balances</th>
                                                <th>Total orders</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>hiio</tbody>
                                    </table>
                                </div>
                            </form> */}


                        </div>
                    </div>

                </form>
                <div className="ps-section__content">
                    <figure className="ps-block--form-box">
                        <figcaption>Product Items</figcaption>
                        <BasicTable />
                        {/* <FilteringTable/> */}
                        {/* <TableSalesInvoiceBill /> */}
                    </figure>
                </div>
                <div className="ps-form__bottom">
                    <a
                        className="ps-btn ps-btn--black"
                        href="#" onClick={() => router.back()}>
                        Back
                    </a>
                    <button type="submit" className="ps-btn">Submit</button>
                </div>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CreateProductPage);
