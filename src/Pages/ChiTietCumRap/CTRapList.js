import React from 'react';
import { Tabs } from 'antd';
import CTRapDetailsList from './CTRapDetailsList'
import CTRapDanhGiaRap from './CTRapDanhGiaRap'
import { Link, scroller } from "react-scroll";
import { history } from '../../App';

import ctrbhd from '../../assets/publicImg/ctrbhd.png';
import ctrcgv from '../../assets/publicImg/ctrcgv.png';
import ctrglx from '../../assets/publicImg/ctrglx.jpg';
import ctrcns from '../../assets/publicImg/ctrcns.jpg';
import ctrlot from '../../assets/publicImg/ctrlot.jpg';
import ctrmeg from '../../assets/publicImg/ctrmeg.jpg';

const { TabPane } = Tabs;
export default function CTRapList(props) {
    let { chiTietRap, maCumRap, maHeThongRap } = props;
    const renderLogoChiTiet = (maCumRap) => {
        let tenLogo = maCumRap.substr(0, 3).trim()
        if (tenLogo === 'bhd') {
            return ctrbhd
        }
        else if (tenLogo === 'cgv') {
            return ctrcgv
        }
        else if (tenLogo === 'glx') {
            return ctrglx
        }
        else if (tenLogo === 'cns') {
            return ctrcns
        }
        else if (tenLogo === 'lot') {
            return ctrlot
        }
        else if (tenLogo === 'meg') {
            return ctrmeg
        }
    }

    const handleTenCumRap = (tenCumRap) => {
        let nameCut = tenCumRap.substr(0, 3).trim();
        let nameNeedColor = tenCumRap.substr(0, tenCumRap.indexOf('-'));
        let nameDontNeedColor = tenCumRap.substr(tenCumRap.indexOf('-'), tenCumRap.length)
        if (nameCut === 'BHD') {
            return <div className="text-left tab_tenCumRap textOver" >
                <span style={{ color: '#80eb34' }}>{nameNeedColor}</span>
                <span >{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "CGV") {
            return <div className="text-left tab_tenCumRap textOver" >
                <span style={{ color: '#ff5252' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "GLX") {
            return <div className="text-left tab_tenCumRap textOver" >
                <span style={{ color: '#ebae34' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "CNS") {
            return <div className="text-left tab_tenCumRap textOver" >
                <span style={{ color: '#b434eb' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "Lot") {
            return <div className="text-left tab_tenCumRap textOver" >
                <span style={{ color: '#ff5252' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "Meg") {
            return <div className="text-left tab_tenCumRap textOver " >
                <span style={{ color: '#ebd334' }}>{nameNeedColor}</span>
                <span >{nameDontNeedColor}</span>
            </div>
        }
    }


    const renderChiTietRap = () => {
        return chiTietRap?.map((ctr) => {
            return ctr.lstCumRap?.map((rap) => {
                return <TabPane key={rap.maCumRap} tab={
                    <Link
                        activeclassname="active"
                        to="detail"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => {
                            history.push(`/chitietcumrap/${maHeThongRap}/${rap.maCumRap}`)
                            setTimeout(function () {
                                scroller.scrollTo('detail', {
                                    duration: 500,
                                    smooth: true,
                                })
                            }, 100);
                        }}
                    ><div className="d-flex  ">
                            <div className="diaChiRap">
                                <img src={renderLogoChiTiet(rap.maCumRap)} alt="rap" width={60} height={60} style={{ objectFit: 'cover' }} />
                            </div>
                            <div className="tabpane_ctr pl-2">
                                {handleTenCumRap(rap.tenCumRap?.replace('Star Cineplex', ''))}
                                <p className="textOver text-left">{rap.diaChi}</p>
                            </div>
                        </div>
                        <hr className="hr_logo" />
                    </Link>}  
                >
                    <CTRapDetailsList danhSachPhim={rap.danhSachPhim} />
                </TabPane>
            })

        })
    }


    const renderMoTa = () => {
        return chiTietRap?.map((ctr) => {
            return ctr.lstCumRap?.map((rap,indexRap) => {
                if (rap.maCumRap === props.maCumRap) {
                    return <div key={indexRap} style={{ minHeight: '200px', color: 'white', padding: '0 50px' }}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p className="row">
                                    <span className="col-6 col-sm-4 font-weight-bold">Địa chỉ</span>
                                    <span className="col-6 col-sm-6">{rap.diaChi.replace('[Bản đồ]','')}</span>
                                </p>
                                <p className="row">
                                    <span className="col-6 col-sm-4 font-weight-bold">Điện thoại</span>
                                    <span className="col-6 col-sm-6">096 325 8741</span>
                                </p>
                                <p className="row">
                                    <span className="col-6 col-sm-4 font-weight-bold">Email</span>
                                    <span className="col-6 col-sm-6">infor@movie.com</span>
                                </p>
                                <p className="row">
                                    <span className="col-6 col-sm-4 font-weight-bold">Phòng chiếu</span>
                                    <span className="col-6 col-sm-6">7 2D. 4 3D</span>
                                </p>
                                <p className="row">
                                    <span className="col-6 col-sm-4 font-weight-bold">Giờ mở cửa</span>
                                    <span className="col-6 col-sm-6">8:00 - 24:00</span>
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="font-weight-bold">Giới thiệu</p>
                                <p >Với tổng diện tích hơn 2.000 m2, bao gồm 7 phòng chiếu được trang bị theo tiêu chuẩn quốc tế. Âm thanh đạt chuẩn Dolby 7.1 với hệ thống cách âm hiện đại, trong đó có 4 phòng 3D,  cùng hơn 1.000 ghế ngồi được thiết kế theo kiểu dáng đẹp mắt và tiện dụng để mang lại sự thoải mái nhất cho khán giả.</p>
                            </div>
                        </div>
                    </div>
                }
                else{ return null }

            })

        })
    }

    return (
        <div className="ctr_list py-5" id="datVe">
            <div className="container-md">
                <ul className="nav nav-tabs nav_tabs_chiTietPhim" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="film-tab" data-toggle="tab" href="#film" role="tab" aria-controls="home" aria-selected="true">Lịch chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="infor-tab" data-toggle="tab" href="#infor" role="tab" aria-controls="profile" aria-selected="false">Thông tin rạp</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="comment-tab" data-toggle="tab" href="#comment" role="tab" aria-controls="contact" aria-selected="false">Đánh giá</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="film" role="tabpanel">
                        <Tabs tabPosition="left" id='tab_ht_rap' activeKey={maCumRap}>
                            {renderChiTietRap()}
                        </Tabs>
                    </div>
                    <div className="tab-pane fade" id="infor" role="tabpanel" >
                        {renderMoTa()}
                    </div>
                    <div className="tab-pane fade" id="comment" role="tabpanel" >
                        <CTRapDanhGiaRap />
                    </div>
                </div>
            </div>
        </div>
    )
}
