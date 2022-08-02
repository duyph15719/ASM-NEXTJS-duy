import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import style from './cart.module.css'
type Props = {}

const cart = (props: Props) => {
    return (
        <div>
            <Header />
            <div className={style.content}>
                <div className="">
                    <h3>Giỏ hàng của bạn</h3>
                    <section className="antialiased text-gray-600  px-4" x-data="app">
                        
                            {/* Table */}
                            <div className="w-full  bg-white mt-10 rounded-sm border border-gray-200">
                                <header className="px-5 py-4 border-b border-gray-100">
                                    <div className="font-semibold text-gray-800">Manage Carts</div>
                                </header>
                                <div className="overflow-x-auto p-3">
                                    <table className="table-auto w-full">
                                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                <th />
                                                <th className="p-2">
                                                    <div className="font-semibold text-left">Product Name</div>
                                                </th>
                                                <th className="p-2">
                                                    <div className="font-semibold text-left">Quantity</div>
                                                </th>
                                                <th className="p-2">
                                                    <div className="font-semibold text-left">Total</div>
                                                </th>
                                                <th className="p-2">
                                                    <div className="font-semibold text-center">Action</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm divide-y divide-gray-100">
                                            {/* record 1 */}
                                            <tr>
                                                <td className="p-2">
                                                    
                                                </td>
                                                <td className="p-2">
                                                    <div className="font-medium text-gray-800">
                                                        Samsung Galaxy Note 4
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-left">1</div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-left font-medium text-green-500">
                                                        1000000đ
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="flex justify-center">
                                                        <button>
                                                            <svg className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                                </path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* record 2 */}
                                            
                                            {/* record 3 */}
                                            
                                        </tbody>
                                    </table>
                                </div>
                                {/* total amount */}
                               
                            </div>
                        
                    </section>

                </div>

                {/*  */}
                <div className="">
                    <h3>Tổng tiền giỏ hàng</h3>
                    <table className='mt-10 text-center  border border-indigo-600 w-80 h-48'>
                   
                    <tr className='pt-5'>
                        Số lượng : 1
                    </tr>
                    <tr className='pt-5'>
                        Thành tiền : 1000000đ
                    </tr>
                    <tr className='pt-5'>
                        Tạm tính : 1000000đ
                    </tr>
                   
                   
                    
                    
                   
                        <button className='mt-5 bg-gray-800 w-32 h-10 text-white rounded-lg'>ĐẶT HÀNG</button>
                    </table>
                       
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default cart