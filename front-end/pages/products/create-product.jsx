import React, { useEffect, useState } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { useRouter } from 'next/router';

const CreateProductPage = () => {

    const router = useRouter()

    const dispatch = useDispatch();
    const [pname, setPname] = useState("")
    const [pnote, setPnote] = useState("")
    const [hsn, setHsnCode] = useState("")
    const [unitOfMeasure, setUnitOfMeasure] = useState("")
    const [stock, setStock] = useState(0)
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
        <ContainerDefault title="Create new product">
            <HeaderDashboard
                title="Create Product"
                description="InvoiceDF Create New Product "
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
                                                Product Name<sup>*</sup>
                                            </label>
                                            <input
                                                value={pname}
                                                className="form-control"
                                                onChange={e => setPname(e.target.value)}
                                                type="text"
                                                placeholder="Enter product name..."
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Product Note
                                            </label>
                                            <textarea
                                                value={pnote}
                                                onChange={e => setPnote(e.target.value)}
                                                className="form-control"
                                                rows="3"
                                                name="editordata"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                HSN/SAC Code<sup>*</sup>
                                            </label>
                                            <input
                                                value={hsn}
                                                onChange={e => setHsnCode(e.target.value)}
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter product Reference..."
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Unit of Measurement<sup>*</sup>
                                            </label>
                                            <select className="form-control" onChange={e => setUnitOfMeasure(e.target.value)}
                                            >
                                                <option value="">Select Unit</option>
                                                <option value="grams">Grams</option>
                                                <option value="kg">Kg.</option>
                                                <option value="tone">Tone</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Stock Available
                                                <sup>*</sup>
                                            </label>
                                            <input
                                                value={stock}
                                                onChange={e => setStock(parseInt(e.target.value))}
                                                className="form-control"
                                                type="number"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Product Type<sup>*</sup>
                                            </label>
                                            <select className="form-control"
                                                onChange={e => setPtype(e.target.value)}
                                            >
                                                <option value="">Select Unit</option>
                                                <option value="taxable">Taxable</option>
                                                <option value="nill_rated">Nill Rated</option>
                                                <option value="exempted">Exempted</option>
                                                <option value="non_gst">Non-GST</option>
                                            </select>
                                        </div>

                                    </div>
                                </figure>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>Taxes</figcaption>
                                    <div className="ps-block__content">
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>CGST</label>
                                                <input
                                                    value={cgst}
                                                    onChange={e => {
                                                        if (e.target.value >= 0 && e.target.value <= 100) {
                                                            const value = parseInt(e.target.value)

                                                            setCgst(value)
                                                            setIgst(value + sgst)
                                                        } else {
                                                            setIgst(0)
                                                            alert("please input valid cgst")
                                                        }
                                                    }}
                                                    placeholder="values in (%)"
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>
                                            <div className="form-group col-6">
                                                <label>SGST</label>
                                                <input
                                                    onChange={e => {
                                                        if (e.target.value >= 0 && e.target.value <= 100) {
                                                            const value = parseInt(e.target.value)

                                                            setSgst(value)
                                                            setIgst(value + cgst)
                                                        } else {
                                                            setIgst(0)
                                                            alert("please input valid cgst")
                                                        }
                                                    }}
                                                    placeholder="values in (%)"
                                                    value={sgst}
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>IGST</label>
                                            <input
                                                value={igst}
                                                onChange={e => setIgst(e.target.value)}
                                                placeholder="values in (%)"
                                                className="form-control"
                                                type="number"
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>CESS</label>
                                                <input
                                                    onChange={e => setCessPer(parseInt(e.target.value))}
                                                    value={cessPer}
                                                    placeholder="values in (%)"
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>
                                            <div className="form-group col-6">
                                                <label>CESS Amount</label>
                                                <input
                                                    value={cessAmt}
                                                    onChange={e => setCessAmt(parseInt(e.target.value))}
                                                    placeholder="values in (₹)"
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </figure>

                                <figure className="ps-block--form-box">
                                    <figcaption>Pricing</figcaption>
                                    <div className="ps-block__content">
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>Sell Price</label>
                                                <input
                                                    onChange={e => setSellPrice(parseInt(e.target.value))}
                                                    value={sellPrice}
                                                    placeholder="values in (₹)"
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Sell Price (Incl. Tax)</label>
                                                <input
                                                    onChange={e => setSellPriceWithTax(parseInt(e.target.value))}
                                                    value={sellPriceWithTax}
                                                    placeholder="values in (₹)"
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>Purchase Price</label>
                                                <input
                                                    onChange={e => setPurchasePrice(parseInt(e.target.value))}
                                                    value={purchasePrice}
                                                    placeholder="values in (₹)"
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Purchase Price (Incl. Tax)</label>
                                                <input
                                                    onChange={e => setPurchasePriceWithTax(parseInt(e.target.value))}
                                                    value={purchasePriceWithTax}
                                                    placeholder="values in (₹)"
                                                    className="form-control"
                                                    type="number"
                                                />
                                            </div>
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
