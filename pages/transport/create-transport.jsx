import React, { useEffect, useState } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { Radio, Input, Space } from 'antd';
import { toggleDrawerMenu } from '~/store/app/action';
import { useRouter } from 'next/router';
import axios from 'axios';


const CreateProductPage = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")
    const [transId, setTransId] = useState("")
    const [vehicleNo, setVehicleNo] = useState("")


    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post("http://127.0.0.1:1338/transports", {
            name, email, mobile, address,
            vehicle_no: vehicleNo,
            transport_id: transId
        })
        console.log(res);

        if (res.status === 200) {
            setName("")
            setEmail("")
            setMobile("")
            setAddress("")
            setTransId("")
            setVehicleNo("")
        }
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
                                                onChange={e => setName(e.target.value)}
                                                type="text"

                                            />
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>
                                                    Email<sup>*</sup>
                                                </label>
                                                <input
                                                    value={email}
                                                    className="form-control"
                                                    onChange={e => setEmail(e.target.value)}
                                                    type="text"

                                                />
                                            </div>
                                            <div className="form-group col-6">
                                                <label>
                                                    Mobile Number<sup>*</sup>
                                                </label>
                                                <input
                                                    value={mobile}
                                                    className="form-control"
                                                    onChange={e => setMobile(e.target.value)}
                                                    type="text"

                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>
                                                Address
                                            </label>
                                            <textarea
                                                value={address}
                                                onChange={e => setAddress(e.target.value)}
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
                                                value={transId}
                                                onChange={e => setTransId(e.target.value)}
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
                                                value={vehicleNo}
                                                onChange={e => setVehicleNo(e.target.value)}
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
