import React from 'react'
import Head from 'next/head'

export default function PrintRecipt() {

    return (
        <>
            <Head>

                <link href="/css/bill.css" rel="stylesheet" />
            </Head>
            <div className="page-copy-container-wrapper">
                <div className="page-wrapper-table">
                    <div
                        className="page-wrapper-tr"
                        style={{ pageBreakInside: "avoid", pageBreakAfter: "auto" }}
                    >
                        <div>
                            <div className="page-wrapper">
                                <div className="page-header">
                                    <table
                                        cellSpacing={0}
                                        cellPadding={0}
                                        className="branding"
                                        width="100%"
                                    >
                                        <colgroup>
                                            <col style={{ width: "70%" }} />
                                            <col style={{ width: "30%" }} />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td style={{ position: "relative", verticalAlign: "top" }}>
                                                    <table cellSpacing={0} cellPadding={0} width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    className="org_orgname"
                                                                    data-editor=".org_orgname"
                                                                >
                                                                    CYPHER'S TECHNOLABS{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    className="org_address"
                                                                    data-editor=".org_address"
                                                                >
                                                                    C-45,Shrinath appt.,
                                                                    <br />
                                                                    vyasvadi, navavadaj
                                                                    <br />
                                                                    AHMEDABAD, Gujarat - 380013{" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td
                                                    style={{
                                                        textAlign: "right",
                                                        verticalAlign: "bottom",
                                                        float: "right"
                                                    }}
                                                >
                                                    <table cellSpacing={0} cellPadding={0}>
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    className="contact_details"
                                                                    data-editor=".contact_details"
                                                                >
                                                                    <b>Name</b> : Yash Rabari
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="contact_details">
                                                                    <b data-editor=".contact_details b">Phone</b> :
                                                                    9974982455
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="contact_details">
                                                                    <b>Email</b> : yashrabari253@gmail.com
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br />
                                    <table cellSpacing={0} cellPadding={0} className="invoice">
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="main-border"
                                                    style={{ width: "100%", borderBottom: "none" }}
                                                >
                                                    <table
                                                        cellSpacing={0}
                                                        border={0}
                                                        cellPadding={0}
                                                        className="header"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{ width: "100%" }}
                                                                    className="header-row"
                                                                >
                                                                    <table cellSpacing={0} cellPadding={0}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td
                                                                                    style={{ width: "35%" }}
                                                                                    className="gstin"
                                                                                >
                                                                                    <span style={{}}>PAN :</span>{" "}
                                                                                </td>
                                                                                <td
                                                                                    style={{ width: "30%" }}
                                                                                    className="invoice-title"
                                                                                >
                                                                                    PAYMENT VOUCHER
                                                                                </td>
                                                                                <td
                                                                                    style={{ width: "35%" }}
                                                                                    className="copyname"
                                                                                />
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <colgroup>
                                                            <col style={{ width: "60%" }} />
                                                            <col style={{ width: "40%" }} />
                                                        </colgroup>
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        borderBottom: "1px solid #0070C0",
                                                                        borderRight: "1px solid #0070C0",
                                                                        verticalAlign: "top"
                                                                    }}
                                                                >
                                                                    <table
                                                                        cellSpacing={0}
                                                                        className="customerdata"
                                                                        style={{ tableLayout: "fixed" }}
                                                                    >
                                                                        <colgroup>
                                                                            <col style={{ width: "22%" }} />
                                                                            <col style={{ width: "78%" }} />
                                                                        </colgroup>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td
                                                                                    colSpan={2}
                                                                                    className="customerdata_label"
                                                                                >
                                                                                    Vendor Detail
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="customerdata_item_label">
                                                                                    M/S
                                                                                </td>
                                                                                <td style={{ overflow: "hidden" }}>
                                                                                    RAIKA EDUCATIONAL CHERITABLE TRUST
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="customerdata_item_label">
                                                                                    Address
                                                                                </td>
                                                                                <td style={{}}>
                                                                                    <div style={{ overflow: "hidden" }}>
                                                                                        RECT Gujarat,, MEMNAGAR, AHMEDABAD,
                                                                                        Gujarat - 380013
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="customerdata_item_label">
                                                                                    PHONE
                                                                                </td>
                                                                                <td style={{}}>9974982455</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="customerdata_item_label">
                                                                                    PAN{" "}
                                                                                </td>
                                                                                <td style={{}}>14818156</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="customerdata_item_label">
                                                                                    State
                                                                                </td>
                                                                                <td style={{}}>Gujarat ( 24 )</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        borderBottom: "1px solid #0070C0",
                                                                        verticalAlign: "top"
                                                                    }}
                                                                >
                                                                    <table cellSpacing={0} className="invoicedata">
                                                                        <colgroup>
                                                                            <col style={{ width: "40%" }} />
                                                                            <col style={{ width: "60%" }} />
                                                                        </colgroup>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="invoicedata_item_label">
                                                                                    Voucher No.
                                                                                </td>
                                                                                <td>2</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="invoicedata_item_label">
                                                                                    Voucher Date
                                                                                </td>
                                                                                <td>05-Aug-2021</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <br />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        className="billdetailsthead"
                                        cellSpacing={0}
                                        border={0}
                                        cellPadding={0}
                                    >
                                        <colgroup>
                                            <col style={{ width: "5%" }} />
                                            <col style={{ width: "70%" }} />
                                            <col style={{ width: "25%" }} />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td className="valign-mid">Sr. No.</td>
                                                <td className="valign-mid">Particulars</td>
                                                <td className="valign-mid">Amount</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="page-content" style={{ height: 509 }}>
                                    <table
                                        className="tableboxLinetable"
                                        cellSpacing={0}
                                        cellPadding={0}
                                        border={0}
                                    >
                                        <colgroup>
                                            <col style={{ width: "5%" }} />
                                            <col style={{ width: "70%" }} />
                                            <col style={{ width: "25%" }} />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="tableboxLine linebox1"
                                                    style={{
                                                        width: "5%",
                                                        left: 0,
                                                        borderLeft: "1px solid rgb(0, 112, 192)",
                                                        height: 509
                                                    }}
                                                ></td>
                                                <td
                                                    className="tableboxLine linebox2"
                                                    style={{ width: "70%", left: "5%", height: 509 }}
                                                ></td>
                                                <td
                                                    className="tableboxLine linebox3"
                                                    style={{ width: "25%", left: "75%", height: 509 }}
                                                ></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        className="billdetailstbody"
                                        id="billdetailstbody"
                                        cellSpacing={0}
                                        border={0}
                                        cellPadding={0}
                                    >
                                        <colgroup>
                                            <col style={{ width: "5%" }} />
                                            <col style={{ width: "70%" }} />
                                            <col style={{ width: "25%" }} />
                                        </colgroup>
                                        <tbody>
                                            <tr className="payment-account-row pageRow1">
                                                <td
                                                    className="txt-center counter"
                                                    data-editor=".payment-account-row td.counter"
                                                >
                                                    1
                                                </td>
                                                <td
                                                    className="txt-left special"
                                                    data-editor=".payment-account-row td.special"
                                                >
                                                    {" "}
                                                    <b data-editor=".payment-account-row td b ">
                                                        Account :{" "}
                                                    </b>{" "}
                                                    <br />{" "}
                                                    <span
                                                        data-editor=".payment-account-row td.special span"
                                                        style={{}}
                                                    >
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RAIKA
                                                        EDUCATIONAL CHERITABLE TRUST
                                                    </span>{" "}
                                                </td>
                                                <td className="txt-right " style={{}} />
                                            </tr>
                                            <tr
                                                className="payment-account-row-advance pageRow1"
                                                data-editor=".payment-account-row-advance td"
                                            >
                                                <td className="txt-center" style={{}} />
                                                <td className="txt-left ">
                                                    <b data-editor=".payment-account-row-advance td b">
                                                        Advance on Receipt :
                                                    </b>{" "}
                                                </td>
                                                <td className="txt-right " style={{}}>
                                                    20,178.00
                                                </td>
                                            </tr>
                                            <tr
                                                className="payment-account-row-note pageRow1"
                                                data-editor=".payment-account-row-note td"
                                            >
                                                <td className="txt-center" style={{}} />
                                                <td className="txt-left">
                                                    <br />
                                                    <b data-editor=".payment-account-row-note td b">Note :</b>
                                                    <br />
                                                    this is note.
                                                </td>
                                                <td className="txt-right " style={{}} />
                                            </tr>
                                            <tr
                                                className="payment-account-row-through pageRow1"
                                                data-editor=".payment-account-row-through td"
                                            >
                                                <td className="txt-center" style={{}} />
                                                <td className="txt-left">
                                                    <br />
                                                    <b data-editor=".payment-account-row-through td b">
                                                        Through :{" "}
                                                    </b>
                                                    <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHEQUE
                                                </td>
                                                <td className="txt-right " style={{}} />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="page-footer">
                                    <table
                                        className="invoicedataFooter"
                                        cellSpacing={0}
                                        style={{ width: "100%" }}
                                        data-editor=".invoicedataFooter td"
                                    >
                                        <colgroup>
                                            <col style={{ width: "75%" }} />
                                            <col style={{ width: "25%" }} />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="txt-bold txt-right"
                                                    style={{ textAlign: "right" }}
                                                />
                                                <td className="txt-bold txt-right" style={{}}>
                                                    20,178.00
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table cellSpacing={0} cellPadding={0} className="invoice">
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="main-border"
                                                    style={{ width: "100%", borderTop: "none" }}
                                                >
                                                    <br />
                                                    <table cellSpacing={0} style={{ width: "100%" }}>
                                                        <colgroup>
                                                            <col style={{ width: "60%" }} />
                                                            <col style={{ width: "40%" }} />
                                                        </colgroup>
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        borderTop: "none",
                                                                        borderRight: "none",
                                                                        borderLeft: "none",
                                                                        verticalAlign: "top"
                                                                    }}
                                                                >
                                                                    <table
                                                                        cellSpacing={0}
                                                                        style={{ width: "100%" }}
                                                                        className="invoiceInfo"
                                                                    >
                                                                        <colgroup>
                                                                            <col style={{ width: "35%" }} />
                                                                            <col style={{ width: "65%" }} />
                                                                        </colgroup>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td
                                                                                    colSpan={2}
                                                                                    data-editor=".invoiceInfo td.section_header"
                                                                                    className="section_header"
                                                                                    style={{
                                                                                        width: "100%",
                                                                                        textAlign: "center",
                                                                                        borderBottom: "none"
                                                                                    }}
                                                                                >
                                                                                    Total in words
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    colSpan={2}
                                                                                    className="amount_in_words"
                                                                                    data-editor=".invoiceInfo td.amount_in_words"
                                                                                >
                                                                                    TWENTY THOUSAND ONE HUNDRED AND
                                                                                    SEVENTY-EIGHT RUPEES ONLY{" "}
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    colSpan={2}
                                                                                    className="section_header"
                                                                                    style={{
                                                                                        width: "100%",
                                                                                        textAlign: "center",
                                                                                        borderBottom: "none"
                                                                                    }}
                                                                                >
                                                                                    Terms and Conditions
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    colSpan={2}
                                                                                    style={{
                                                                                        width: "100%",
                                                                                        borderBottom: "none"
                                                                                    }}
                                                                                    data-editor=".invoiceInfo td .terms_condition_box"
                                                                                >
                                                                                    <div className="terms_condition_box" />
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        borderTop: "none",
                                                                        verticalAlign: "top",
                                                                        borderLeft: "1px solid #0070C0"
                                                                    }}
                                                                >
                                                                    <table
                                                                        cellSpacing={0}
                                                                        style={{ width: "100%" }}
                                                                        className="invoiceTotal"
                                                                    >
                                                                        <colgroup>
                                                                            <col style={{ width: "40%" }} />
                                                                            <col style={{ width: "60%" }} />
                                                                        </colgroup>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td
                                                                                    className="txt-bg"
                                                                                    data-editor=".invoiceTotal td:not(.special)"
                                                                                >
                                                                                    Total Amount{" "}
                                                                                </td>
                                                                                <td
                                                                                    className="txt-bg txt-right special"
                                                                                    data-editor=".invoiceTotal td.special"
                                                                                >
                                                                                    ₹ 20,178.00
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colSpan={2} className="txt-right">
                                                                                    (E &amp; O.E.)
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colSpan={2}>&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    colSpan={2}
                                                                                    className="footer_seal_title"
                                                                                    data-editor=".invoiceTotal td.footer_seal_title"
                                                                                >
                                                                                    Certified that the particulars given above
                                                                                    are true and correct.
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    colSpan={2}
                                                                                    className="footer_seal_name"
                                                                                    data-editor=".invoiceTotal td.footer_seal_name"
                                                                                >
                                                                                    For CYPHER'S TECHNOLABS
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    colSpan={2}
                                                                                    style={{
                                                                                        borderBottom: "none",
                                                                                        height: 60,
                                                                                        textAlign: "center"
                                                                                    }}
                                                                                ></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    colSpan={2}
                                                                                    className="footer_seal_signature"
                                                                                    data-editor=".invoiceTotal td.footer_seal_signature"
                                                                                >
                                                                                    Authorised Signatory
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table cellSpacing={0} cellPadding={0} className="branding_table">
                                        <colgroup>
                                            <col style={{ width: "80%" }} />
                                            <col style={{ width: "20%" }} />
                                        </colgroup>
                                        <tbody>
                                            <tr className="branding_rt">
                                                <td
                                                    style={{
                                                        padding: "5px 0 0",
                                                        fontSize: 12,
                                                        lineHeight: 15,
                                                        fontWeight: "normal"
                                                    }}
                                                ></td>
                                                <td
                                                    style={{
                                                        textAlign: "left",
                                                        padding: "5px 0 0",
                                                        fontWeight: "bold",
                                                        color: "#7A7A7A",
                                                        fontSize: 10,
                                                        lineHeight: 20,
                                                        textTransform: "uppercase",
                                                        verticalAlign: "top"
                                                    }}
                                                ></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}
