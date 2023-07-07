import React, { useEffect, useState } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { useRouter } from 'next/router';
import { postCustomers } from '~/networks/api';


const stateData = [
    {
        "name": "Other Territory",
        "short_code": "OT",
        "state_code": 97
    },
    {
        "name": "Foreign Country",
        "short_code": "FC",
        "state_code": 96
    },
    {
        "name": "Ladakh",
        "short_code": "LA",
        "state_code": 38
    },
    {
        "name": "Andhra Pradesh",
        "short_code": "AP",
        "state_code": 37
    },
    {
        "name": "Telangana",
        "short_code": "TS",
        "state_code": 36
    },
    {
        "name": "Andaman and Nicobar Islands",
        "short_code": "AN",
        "state_code": 35
    },
    {
        "name": "Puducherry",
        "short_code": "PY",
        "state_code": 34
    },
    {
        "name": "Tamil Nadu",
        "short_code": "TN",
        "state_code": 33
    },
    {
        "name": "Kerala",
        "short_code": "KL",
        "state_code": 32
    },
    {
        "name": "Lakshadweep",
        "short_code": "LD",
        "state_code": 31
    },
    {
        "name": "Goa",
        "short_code": "GA",
        "state_code": 30
    },
    {
        "name": "Karnataka",
        "short_code": "KA",
        "state_code": 29
    },
    {
        "name": "Maharashtra",
        "short_code": "MH",
        "state_code": 27
    },
    {
        "name": "Dadra and Nagar Haveli",
        "short_code": "DN",
        "state_code": 26
    },
    {
        "name": "Daman and Diu",
        "short_code": "DD",
        "state_code": 25
    },
    {
        "name": "Gujarat",
        "short_code": "GJ",
        "state_code": 24
    },
    {
        "name": "Madhya Pradesh",
        "short_code": "MP",
        "state_code": 23
    },
    {
        "name": "Chhattisgarh",
        "short_code": "CG",
        "state_code": 22
    },
    {
        "name": "Odisha",
        "short_code": "OR",
        "state_code": 21
    },
    {
        "name": "Jharkhand",
        "short_code": "JH",
        "state_code": 20
    },
    {
        "name": "West Bengal",
        "short_code": "WB",
        "state_code": 19
    },
    {
        "name": "Assam",
        "short_code": "AS",
        "state_code": 18
    },
    {
        "name": "Meghalaya",
        "short_code": "ML",
        "state_code": 17
    },
    {
        "name": "Tripura",
        "short_code": "TR",
        "state_code": 16
    },
    {
        "name": "Mizoram",
        "short_code": "MZ",
        "state_code": 15
    },
    {
        "name": "Manipur",
        "short_code": "MN",
        "state_code": 14
    },
    {
        "name": "Nagaland",
        "short_code": "NL",
        "state_code": 13
    },
    {
        "name": "Arunachal Pradesh",
        "short_code": "AR",
        "state_code": 12
    },
    {
        "name": "Sikkim",
        "short_code": "SK",
        "state_code": 11
    },
    {
        "name": "Bihar",
        "short_code": "BR",
        "state_code": 10
    },
    {
        "name": "Uttar Pradesh",
        "short_code": "UP",
        "state_code": 9
    },
    {
        "name": "Rajasthan",
        "short_code": "RJ",
        "state_code": 8
    },
    {
        "name": "Delhi",
        "short_code": "DL",
        "state_code": 7
    },
    {
        "name": "Haryana",
        "short_code": "HR",
        "state_code": 6
    },
    {
        "name": "Uttarakhand",
        "short_code": "UA",
        "state_code": 5
    },
    {
        "name": "Chandigarh",
        "short_code": "CH",
        "state_code": 4
    },
    {
        "name": "Punjab",
        "short_code": "PB",
        "state_code": 3
    },
    {
        "name": "Himachal Pradesh",
        "short_code": "HP",
        "state_code": 2
    },
    {
        "name": "Jammu and Kashmir",
        "short_code": "JK",
        "state_code": 1
    }
]



const CreateProductPage = () => {

    const router = useRouter()


    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [personName, setPersonName] = useState("")
    const [personNumber, setPersonNumber] = useState(0)
    const [shipName, setShipName] = useState("")
    const [shipNumber, setShipNumber] = useState(0)
    const [faxNumber, setFaxNumber] = useState(0)
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")
    const [address, setAddress] = useState("")
    const [shipAddress, setShipAddress] = useState("")
    const [landmark, setLandmark] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [shipCountry, setShipCountry] = useState("")
    const [shipState, setShipState] = useState("")
    const [city, setCity] = useState("")
    const [pin, setPin] = useState(0)
    const [companyType, setCompanyType] = useState("")
    const [companyRegistrationType, setCompanyRegistrationType] = useState("")
    const [licNo, setLicNo] = useState("")
    const [GST, setGST] = useState("")
    const [shipGST, setShipGST] = useState("")
    const [PAN, setPAN] = useState("")
    const [distance, setDistance] = useState(0)




    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            customer_name: name,
            contact_person_name: personName,
            contact_no: personNumber,
            ship_contact_person_name: shipName,
            ship_mobile_number: shipNumber,
            fax_number: faxNumber,
            email,
            website,
            address,
            ship_address: shipAddress,
            landmark,
            country,
            state,
            ship_country: shipCountry,
            ship_state: shipState,
            city,
            pin,
            company_type: companyType,
            registration_type: companyRegistrationType,
            license_number: licNo,
            gst_number: GST,
            ship_gst: shipGST,
            pan_number: PAN,
            distance,
        }

        const res = await postCustomers(data)
        console.log(res.data);


    }



    return (
        <ContainerDefault title="Create new product">
            <HeaderDashboard
                title="Customers"
                description="InvoiceDF add New Customers"
            />
            <section className="ps-new-item">
                <form
                    className="ps-form ps-form--new-product"
                    onSubmit={e => handleSubmit(e)}
                >
                    <div className="ps-form__content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>General</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>
                                                Customer Name<sup>*</sup>
                                            </label>
                                            <input
                                                value={name}
                                                className="form-control"
                                                onChange={e => setName(e.target.value)}
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Contact Person Name
                                            </label>
                                            <input
                                                value={personName}
                                                className="form-control"
                                                onChange={e => setPersonName(e.target.value)}
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Contact Number<sup>*</sup>
                                            </label>
                                            <input
                                                value={personNumber}
                                                className="form-control"
                                                onChange={e => setPersonNumber(parseInt(e.target.value))}
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                FAX Number<sup>*</sup>
                                            </label>
                                            <input
                                                value={faxNumber}
                                                className="form-control"
                                                onChange={e => setFaxNumber(parseInt(e.target.value))}
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                E-Mail<sup>*</sup>
                                            </label>
                                            <input
                                                value={email}
                                                className="form-control"
                                                onChange={e => setEmail(e.target.value)}
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Website<sup>*</sup>
                                            </label>
                                            <input
                                                value={website}
                                                className="form-control"
                                                onChange={e => setWebsite(e.target.value)}
                                                type="text"
                                            />
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
                                                Landmark<sup>*</sup>
                                            </label>
                                            <input
                                                value={landmark}
                                                className="form-control"
                                                onChange={e => setLandmark(e.target.value)}
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Country<sup>*</sup>
                                            </label>
                                            <input
                                                value={country}
                                                className="form-control"
                                                onChange={e => setCountry(e.target.value)}
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                State<sup>*</sup>
                                            </label>
                                            <select value={state} className="form-control" onChange={e => setState(e.target.value)}
                                            >
                                                <option value="">Select State</option>
                                                {
                                                    stateData.map((data, key) => {
                                                        return <option key={data.state_code} value={data.name + ' (' + data.state_code + ')'}>{data.name + ' ' + data.short_code + ' (' + data.state_code + ')'}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                City
                                                <sup>*</sup>
                                            </label>
                                            <input
                                                value={city}
                                                onChange={e => setCity(e.target.value)}
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Pin Code
                                                <sup>*</sup>
                                            </label>
                                            <input
                                                value={pin}
                                                onChange={e => setPin(parseInt(e.target.value))}
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                            />
                                        </div>

                                    </div>
                                </figure>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>Legal Details</figcaption>
                                    <div className="ps-block__content">
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>
                                                    Company Type<sup>*</sup>
                                                </label>
                                                <select
                                                    value={companyType}
                                                    className="form-control"
                                                    onChange={e => setCompanyType(e.target.value)}

                                                >
                                                    <option value="">Select Type</option>
                                                    <option value="customer">Customer</option>
                                                    <option value="vendor">Vendor</option>
                                                    <option value="customer_vendor">Customer / Vendor</option>

                                                </select>
                                            </div>

                                            <div className="form-group col-6">
                                                <label>
                                                    Registration Type<sup>*</sup>
                                                </label>
                                                <select className="form-control"
                                                    value={companyRegistrationType}
                                                    onChange={e => setCompanyRegistrationType(e.target.value)}

                                                >
                                                    <option value="">Select Unit</option>
                                                    <option value="regular">Regular</option>
                                                    <option value="regular_emb">Regular-Embassy/Un Body</option>
                                                    <option value="regular_sez">Regular-SEZ</option>
                                                    <option value="composition">Composition</option>
                                                    <option value="consumer">Consumer</option>
                                                    <option value="unregistered">Unregistered</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>License No.</label>
                                            <input
                                                value={licNo}
                                                onChange={e => setLicNo(e.target.value)}
                                                placeholder="LICNU00098765"
                                                className="form-control"
                                                type="text"
                                            />
                                        </div><div className="form-group">
                                            <label>GST Number</label>
                                            <input
                                                value={GST}
                                                onChange={e => setGST(e.target.value)}
                                                placeholder="GSTIN12345678"
                                                className="form-control"
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>PAN Number</label>
                                            <input
                                                value={PAN}
                                                onChange={e => setPAN(e.target.value)}
                                                placeholder="EK********"
                                                className="form-control"
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Distance for e-way bill (in km)</label>
                                            <input
                                                value={distance}
                                                onChange={e => setDistance(parseInt(e.target.value))}
                                                placeholder="00"
                                                className="form-control"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                </figure>

                                <figure className="ps-block--form-box">
                                    <figcaption>Additional Shipping Address</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>
                                                Contact Person Name<sup>*</sup>
                                            </label>
                                            <input
                                                value={shipName}
                                                className="form-control"
                                                onChange={e => setShipName(e.target.value)}
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Contact Number<sup>*</sup>
                                            </label>
                                            <input
                                                value={shipNumber}
                                                className="form-control"
                                                onChange={e => setShipNumber(parseInt(e.target.value))}
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                GST/PAN Number<sup>*</sup>
                                            </label>
                                            <input
                                                value={shipGST}
                                                className="form-control"
                                                onChange={e => setShipGST(e.target.value)}
                                                type="text"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>
                                                Address
                                            </label>
                                            <textarea
                                                value={shipAddress}
                                                onChange={e => setShipAddress(e.target.value)}
                                                className="form-control"
                                                rows="2"
                                                name="editordata"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Country<sup>*</sup>
                                            </label>
                                            <input
                                                value={shipCountry}
                                                className="form-control"
                                                onChange={e => setShipCountry(e.target.value)}
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                State<sup>*</sup>
                                            </label>
                                            <select className="form-control"
                                                value={shipState}
                                                onChange={e => setShipState(e.target.value)}

                                            >
                                                <option value="">Select State</option>
                                                {
                                                    stateData.map((data, key) => {
                                                        return <option key={data.state_code} value={data.name + ' (' + data.state_code + ')'}>{data.name + ' ' + data.short_code + ' (' + data.state_code + ')'}</option>
                                                    })
                                                }
                                            </select>
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
                        <button className="ps-btn">Submit</button>
                    </div>
                </form>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CreateProductPage);
