import React from 'react'

export default function Print() {
    return (
        <div style={{ width: 700, height: 500, margin: 'auto' }}>
            <table border={1} cellSpacing={0} style={{ width: '700px' }}>
                <tbody>
                    <tr>
                        <td colSpan={60}>GSTIN:24AHOPJ9794P1Z6&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;Tex invoice &nbsp;&nbsp; &nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; triplicate for supplier</td>
                    </tr>
                    <tr>
                        <th colSpan={35}>customer detail</th>
                        <td colSpan={25} rowSpan={2}>Invoice no. 55 invoice date. 03-04-2021<br />
                            challan no. 48 challan date. 03-04-2021<br />
                            transpot darmeshji <br />
                            transpot id tivari vehical no. g.j. 01-f.t.7890
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={35}>
                            Invoice no. 55 invoice date. 03-04-2021<br />
                            challan no. 48 challan date. 03-04-2021<br />
                            transpot darmeshji <br />
                            transpot id tivari vehical no. g.j. 01-f.t.7890
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2} colSpan={3}>sr. No</td>
                        <td rowSpan={2} colSpan={20}>Name of Product</td>
                        <td rowSpan={2} colSpan={3}>HSN/SAC</td>
                        <td rowSpan={2} colSpan={4}>Qty</td>
                        <td rowSpan={2} colSpan={4}>Rate</td>
                        <td rowSpan={2} colSpan={5}>Taxbale value</td>
                        <th colSpan={7}>CGST</th>
                        <th colSpan={7}>SGST</th>
                        <td rowSpan={2} colSpan={7}>Total</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>%</td>
                        <td colSpan={5}>amount</td>
                        <td colSpan={2}>%</td>
                        <td colSpan={5}>amount</td>
                    </tr>
                    <tr className="Fifthrow">
                        <td colSpan={3} style={{ height: '450px' }} />
                        <td colSpan={20} style={{ height: '450px' }} />
                        <td colSpan={3} style={{ height: '450px' }} />
                        <td colSpan={4} style={{ height: '450px' }} />
                        <td colSpan={4} style={{ height: '450px' }} />
                        <td colSpan={5} style={{ height: '450px' }} />
                        <td colSpan={2} style={{ height: '450px' }} />
                        <td colSpan={5} style={{ height: '450px' }} />
                        <td colSpan={2} style={{ height: '450px' }} />
                        <td colSpan={5} style={{ height: '450px' }} />
                        <td colSpan={7} style={{ height: '450px' }} />
                    </tr>
                    <tr className="SevethRow">
                        <td colSpan={26} style={{ height: '18px' }} >Total</td>
                        <td colSpan={4} style={{ height: '18px' }} >2,564.00</td>
                        <td colSpan={4} style={{ height: '18px' }} />
                        <td colSpan={5} style={{ height: '18px' }} >51,280.00</td>
                        <td colSpan={2} style={{ height: '18px' }} />
                        <td colSpan={5} style={{ height: '18px' }} >1,282.00</td>
                        <th colSpan={2} style={{ height: '18px' }} />
                        <th colSpan={5} style={{ height: '18px' }} >1,282.00</th>
                        <td colSpan={7} style={{ height: '18px' }} >53,844.00</td>
                    </tr>
                    <tr className="SevethRow">
                        <td colSpan={60} style={{ height: '18px' }} />
                    </tr>
                    <tr>
                        <th colSpan={35}>Total in words
                        </th><td colSpan={25}>taxable Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;51,280.00
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2} colSpan={35}>FIFTY-THREE THOUSAND EIGHT HUNDRED AND FORTY-FOURRUPEES ONLY</td>
                        <td colSpan={25}>
                            ADD:CGST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1282.00
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={25}>ADD:SGST
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            1282.00</td>
                    </tr>
                    <tr>
                        <th colSpan={35}>Bank Dtails</th>
                        <td colSpan={25}>Tatal Tax</td>
                    </tr>
                    <tr>
                        <td colSpan={35} rowSpan={2}>Bank Name:- <br />
                            Branch Name:-<br />
                            Bank Account Number :-<br />
                            Bank Branch IFSC :-
                        </td>
                        <td colSpan={25}>Total Amount<br /> After Tax
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹53,844.00
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={15}>GST Payable on Reverse Charge</th>
                        <th colSpan={10}>N.A.</th>
                    </tr>
                    <tr>
                        <th colSpan={35}>Terms and Conditions</th>
                        <td colSpan={25}>Certified that the purticular given above are true and currect</td>
                    </tr>
                    <tr>
                        <td colSpan={35} rowSpan={3}>1.Subject to our horme jurisdication.<br />
                            2.Our Responsibility Ceases as soon as goods leaves<br />
                            3.Goods once sold will not taken back.<br />
                            4.Delivery Ex-Premises.
                        </td>
                        <td colSpan={25} />
                    </tr>
                    <tr className="SevethRow">
                        <th colSpan={25} rowSpan={1}>Authorised Signatury</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
