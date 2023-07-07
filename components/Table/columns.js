import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'SR.',
    Footer: 'SR.',
    accessor: 'SR',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'PRODUCT / OTHER CHARGES',
    Footer: 'PRODUCT / OTHER CHARGES',
    accessor: 'PRODUCT',
    sticky: 'left'
  },
  {
    Header: 'HSN/SAC CODE',
    Footer: 'HSN/SAC CODE',
    accessor: 'HSN_SAC',
    sticky: 'left'
  },


  {
    Header: 'QTY.',
    Footer: 'QTY.',
    accessor: 'QTY',
    // Cell: ({ value }) => {
    //   return format(new Date(value), 'dd/MM/yyyy')
    // }
  },
  {
    Header: 'PRICE (RS)',
    Footer: 'PRICE (RS)',
    accessor: 'PRICE'
  },
  {
    Header: 'DISCOUNT',
    Footer: 'DISCOUNT',
    accessor: 'DISCOUNT'
  },
  {
    Header: 'CGST',
    Footer: 'CGST',
    accessor: 'CGST'
  },
  {
    Header: 'SGST',
    Footer: 'SGST',
    accessor: 'SGST'
  },
  {
    Header: 'IGST',
    Footer: 'IGST',
    accessor: 'IGST'
  },
  {
    Header: ' CESS',
    Footer: ' CESS',
    accessor: ' CESS'
  },
  {
    Header: 'TOTAL',
    Footer: ' TOTAL',
    accessor: ' TOTAL'
  },
]