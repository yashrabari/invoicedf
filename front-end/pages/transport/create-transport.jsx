import React, { useEffect, useState } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { Radio, Input, Space } from 'antd';
import { toggleDrawerMenu } from '~/store/app/action';
import { useRouter } from 'next/router';


const CreateProductPage = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const [rnumber, setRnumber] = useState(0)
    const [name, setName] = useState("")
    const [receiptDate, setReceiptDate] = useState(new Date)
    const [pnote, setPnote] = useState("")
    const [hsn, setHsnCode] = useState("")
    const [unitOfMeasure, setUnitOfMeasure] = useState("")
    const [paymentOption, setPaymentOption] = useState("")
    const [ptype, setPtype] = useState("")
    const [cgst, setCgst] = useState(0)
    const [sgst, setSgst] = useState(0)
    const [igst, setIgst] = useState(0)
    const [cessPer, setCessPer] = useState(0)
    const [cessAmt, setCessAmt] = useState(0)
    const [sellPrice, setSellPrice] = useState(0)
    const [sellPriceWithTax, setSellPriceWithTax] = useState(0)
    const [purchasePrice, setPurchasePrice] = useState(0)
    const [purchasePriceWithTax, setPurchasePriceWithTax] = useState(0)

    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: pname,
            note: pnote,
            hsn,
            unit_measurement: unitOfMeasure,
            stock,
            product_type: ptype,
            cgst,
            sgst,
            igst,
            cess: cessPer,
            cess_amt: cessAmt,
            sell_price: sellPrice,
            sell_price_tax: sellPriceWithTax,
            purchase_price: purchasePrice,
            purchase_price_tax: purchasePriceWithTax,
        }

        const response = await fetch('http://localhost:1337/products', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });


    }



    return (
        <ContainerDefault title="Create new Transport">
            <HeaderDashboard
                title="Transport"
                description="InvoiceDF Create New Transport."
            />
            <section className="ps-new-item">
                <form
                    onSubmit={e => handleSubmit(e)}
                    className="ps-form ps-form--new-product">
                    <div className="ps-form__content">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>General</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>
                                                Transport Name<sup>*</sup>
                                            </label>
                                            <input
                                                value={name}
                                                className="form-control"
                                                onChange={e => setRnumber(e.target.value)}
                                                type="text"

                                            />
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>
                                                    Email<sup>*</sup>
                                                </label>
                                                <input
                                                    value={name}
                                                    className="form-control"
                                                    onChange={e => setRnumber(e.target.value)}
                                                    type="text"

                                                />
                                            </div>
                                            <div className="form-group col-6">
                                                <label>
                                                    Mobile Number<sup>*</sup>
                                                </label>
                                                <input
                                                    value={name}
                                                    className="form-control"
                                                    onChange={e => setRnumber(e.target.value)}
                                                    type="text"

                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>
                                                Address
                                            </label>
                                            <textarea
                                                onChange={e => setData({ note: e.target.value })}
                                                className="form-control"
                                                rows="4"
                                                name="editordata"></textarea>
                                        </div>

                                        <div className="form-group">
                                            <label>
                                                Transport ID<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                onChange={e => setData({ name: e.target.value })}
                                                type="text"
                                                placeholder="Enter Transport ID..."
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Vehicle No.<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                onChange={e => setData({ name: e.target.value })}
                                                type="text"
                                                placeholder="Enter Vehicle No..."
                                            />
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
                        <button type="submit" className="ps-btn ps-btn--success">Submit</button>
                    </div>
                </form>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CreateProductPage);
