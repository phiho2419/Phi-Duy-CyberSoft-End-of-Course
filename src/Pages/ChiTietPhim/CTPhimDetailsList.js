import React, { Fragment } from 'react'
import { Tabs, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import BHDStar_theater from '../../assets/publicImg/BHDStar_theater.jpg';
import CGV_theater from '../../assets/publicImg/CGV_theater.jpg';
import CineStar_theater from '../../assets/publicImg/CineStar_theater.jpg';
import Galaxy_theater from '../../assets/publicImg/Galaxy_theater.jpg';
import LotteCinima_theater from '../../assets/publicImg/LotteCinima_theater.jpg';
import MegaGS_theater from '../../assets/publicImg/MegaGS_theater.jpg';

const { TabPane } = Tabs;

export default function CTPhimDetailsList(props) {

    let { cumRapChieu, logo } = props;

    const renderLogoChiTiet = () => {
        let tenLogo = logo.substr(0, 3).trim()
        if (tenLogo === 'BHD') {
            return <img src={BHDStar_theater} width={120} height={140} alt="hinhRap"/>
        }
        else if (tenLogo === 'cgv') {
            return <img src={CGV_theater} width={120} height={140} alt="hinhRap"/>
        }
        else if (tenLogo === 'Gal') {
            return <img src={Galaxy_theater} width={120} height={140} alt="hinhRap"/>
        }
        else if (tenLogo === 'Cin') {
            return <img src={CineStar_theater} width={120} height={140} alt="hinhRap"/>
        }
        else if (tenLogo === 'Lot') {
            return <img src={LotteCinima_theater} width={120} height={140} alt="hinhRap"/>
        }
        else if (tenLogo === 'Meg') {
            return <img src={MegaGS_theater} width={120} height={140} alt="hinhRap"/>
        }
    }
    const handleTenCumRap = (tenCumRap) => {
        let nameCut = tenCumRap.substr(0, 3).trim();
        let nameNeedColor = tenCumRap.substr(0, tenCumRap.indexOf('-'));
        let nameDontNeedColor = tenCumRap.substr(tenCumRap.indexOf('-'), tenCumRap.length)
        if (nameCut === 'BHD') {
            return <div className="tenCumRap" >
                <span style={{ color: '#80eb34' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "CGV") {
            return <div className="tenCumRap" >
                <span style={{ color: '#ff5252' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "GLX") {
            return <div className="tenCumRap" >
                <span style={{ color: '#ebae34' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "CNS") {
            return <div className="tenCumRap" >
                <span style={{ color: '#b434eb' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "Lot") {
            return <div className="tenCumRap" >
                <span style={{ color: '#ff5252' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "Meg") {
            return <div className="tenCumRap" >
                <span style={{ color: '#ebd334' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
    }

    const renderChiTietPhim = () => {
        return cumRapChieu?.map((rap, index) => {
            if (index < 1) {
                return <Fragment key={index}>
                    <div className="d-md-flex my-3 align-items-center" >
                        {renderLogoChiTiet()}
                        <div className='mx-2'>
                            {handleTenCumRap(rap.tenCumRap)}
                            <p>2D/Digital</p>
                            <div className="mt-2 ml-2">
                                {rap.lichChieuPhim?.map((lichChieu, index) => {
                                    if (index <= 5) {
                                        return <span key={index} className="ticket">
                                        <NavLink to={`/chitietphongve/${lichChieu.maLichChieu}`} className="font-weight-bold" style={{color:'white'}}>{lichChieu.ngayChieuGioChieu.slice(11, 16)}</NavLink>
                                    </span>
                                    }
                                    else{ return null }
                                })}
                            </div>
                        </div>
                    </div>
                    <hr style={{ width: '80%' }} />
                </Fragment>
            }
            else{ return null }
        })
    }
    const tagNullList = () => {
        return <Tag color="red" style={{ fontSize: '18px', padding: '4px 8px' }}>Ngày này không có lịch chiếu</Tag>
    }

    return (
        <div>
            <Tabs defaultActiveKey="1" tabPosition='top' type="card" >
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 2</p>
                    <p>Ngày 1</p>
                </div>} key="1">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 3</p>
                    <p>Ngày 2</p>
                </div>} key="2">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 4</p>
                    <p>Ngày 3</p>
                </div>} key="3">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 5</p>
                    <p>Ngày 4</p>
                </div>} key="4">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 6</p>
                    <p>Ngày 5</p>
                </div>} key="5">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 7</p>
                    <p>Ngày 6</p>
                </div>} key='6'>
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Chủ Nhật</p>
                    <p>Ngày 7</p>
                </div>} key="7">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 2</p>
                    <p>Ngày 8</p>
                </div>} key="8">
                    <div className="tab_chi_tiet_rap">
                        {tagNullList()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 3</p>
                    <p>Ngày 9</p>
                </div>} key="9">
                    <div className="tab_chi_tiet_rap">
                        {tagNullList()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 4</p>
                    <p>Ngày 10</p>
                </div>} key="10">
                    <div className="tab_chi_tiet_rap">
                        {tagNullList()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 5</p>
                    <p>Ngày 11</p>
                </div>} key="11">
                    <div className="tab_chi_tiet_rap">
                        {tagNullList()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 6</p>
                    <p>Ngày 12</p>
                </div>} key="12">
                    <div className="tab_chi_tiet_rap">
                        {tagNullList()}
                    </div>
                </TabPane>

            </Tabs>
        </div>
    )
}
