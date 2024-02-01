import './header.css'
import {useState} from "react";
import headimg from "../imgs/logo.jpg"
import {BookFilled, FileFilled, HomeFilled} from "@ant-design/icons";
function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="header">
            <div className="header-header">
                <div className="header-button" onClick={()=>{setIsOpen(!isOpen)}}>
                    <svg t="1706773216315" className={isOpen ? 'open' : 'closed'} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2107" width="32" height="32"><path d="M449.774 512L169.76 231.986a7.997 7.997 0 0 1 0-11.314l50.911-50.911a7.999 7.999 0 0 1 11.314 0l280.014 280.014 280.008-280.008a7.997 7.997 0 0 1 11.314 0l50.911 50.911a7.998 7.998 0 0 1 0 11.313L574.224 512l280.009 280.009a7.999 7.999 0 0 1 0 11.314l-50.912 50.911a7.998 7.998 0 0 1-11.313 0L511.999 574.225 231.984 854.24a7.999 7.999 0 0 1-11.314 0l-50.911-50.912a7.998 7.998 0 0 1 0-11.313L449.774 512z" p-id="2108" fill="#ffffff"></path></svg>
                    <svg t="1706771589748" className={isOpen ? 'closed' : 'open'} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1754" width="32" height="32"><path d="M960 304c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16V176c0-8.84 7.16-16 16-16h864c8.84 0 16 7.16 16 16v128z m-16 288c8.84 0 16-7.16 16-16V448c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v128c0 8.84 7.16 16 16 16h864z m0 272c8.84 0 16-7.16 16-16V720c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v128c0 8.84 7.16 16 16 16h864z" p-id="1755" fill="#ffffff"></path></svg>
                </div>
                <div className="header-container">
                    <div className="header-title">Multimedia Security and Forensics Group</div>
                    <div className="header-img-container">
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img className="header-img" src={headimg} alt={"photo"}/>

                    </div>
                    <div className="header-name">
                        MICS Lab
                    </div>
                    <div className="header-intorduction">
                        <div>Professor, PhD. Supervisor</div>
                        <div>Director of Cyberspace Security Department</div>
                        <div>University of Shanghai for Science and Technology, China</div>
                        <div>email: qin@usst.edu.cn</div>
                        <div>Chinese homepage（中文主页）: http://csee.hnu.edu.cn/people/liaoxin</div>
                    </div>
                </div>

            </div>
            <div className={`header-footer ${isOpen ? 'show' : ''}`}>
                <div className="header-footer-item"><HomeFilled className="header-footer-item-svg"/>Home</div>
                <div className="header-footer-item"><FileFilled className="header-footer-item-svg"/>Publications</div>
                <div className="header-footer-item"><BookFilled className="header-footer-item-svg"/>Teaching</div>
                <div className="header-footer-item"><svg t="1706784400615" className="header-footer-item-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2216" width="16" height="16"><path d="M758.560512 68.191078 265.439488 68.191078c-54.490032 0-98.130971 44.134173-98.130971 98.624205l-0.493234 788.993638L512 807.872614l345.184717 147.936307L857.184717 166.815283C857.184717 112.325251 813.04952 68.191078 758.560512 68.191078z" p-id="2217" fill="#2c2c2c"></path></svg>Services</div>
                <div className="header-footer-item"><svg t="1706784481770" className="header-footer-item-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4433" width="16" height="16"><path d="M535.6 511.8c95.1-10.5 172.1-87.5 182.6-182.6C732 204 634.4 98.2 512 98.2c-114.6 0-207.5 92.8-207.5 207.4v0.1c0 122.4 105.9 219.9 231.1 206.1zM512 572.4c-138.5 0-415 79.4-415 237.1v88.9c0 16.4 13.3 29.6 29.6 29.6h770.7c16.4 0 29.6-13.3 29.6-29.6v-88.9C927 651.9 650.5 572.4 512 572.4z" p-id="4434" fill="#2c2c2c"></path></svg>Members</div>
                <div className="header-footer-item"><svg t="1706784517606" className="header-footer-item-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3585" width="16" height="16"><path d="M945.08544 366.6432l-425.97376-183.1936a20.5312 20.5312 0 0 0-8.12544-1.6896c-2.7648 0-5.52448 0.5632-8.14592 1.6896L76.87168 366.6432c-8.98048 3.84512-14.92992 13.65504-14.92992 24.59136 0 10.9568 5.94944 20.74112 14.92992 24.60672L502.8352 599.04a20.29056 20.29056 0 0 0 16.27136 0l331.1872-142.43328v145.7152c-17.75104 9.40032-30.08512 29.8496-30.08512 53.62688 0 23.7824 12.33408 44.22656 30.08512 53.62688v50.83136h43.6224v-50.82112c17.76128-9.40032 30.1056-29.8496 30.1056-53.63712s-12.34432-44.2368-30.1056-53.63712V437.84704l51.16416-22.00576c8.97536-3.8656 14.9248-13.65504 14.9248-24.60672 0-10.93632-5.94944-20.74624-14.9248-24.59136z m-434.0992 269.16352a47.96928 47.96928 0 0 1-19.03104-3.95776L226.4064 517.632v157.70112c0 129.16224 193.65888 167.936 254.208 167.936h60.69248c45.35808 0 254.22848-38.77376 254.22848-167.936v-157.696l-265.55904 114.21184a47.76448 47.76448 0 0 1-18.9952 3.95776z" fill="#2c2c2c" p-id="3586"></path></svg>Alumini</div>
                <div className="header-footer-item"><svg t="1706784559268" className="header-footer-item-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4705" width="16" height="16"><path d="M878.45888 0a146.285714 146.285714 0 0 0-146.285714 146.285714 90.697143 90.697143 0 0 0 0 19.748572L263.327451 351.085714A146.285714 146.285714 0 1 0 147.030309 585.142857a146.285714 146.285714 0 0 0 86.308571-29.257143l292.571429 257.462857A146.285714 146.285714 0 0 0 512.744594 877.714286a146.285714 146.285714 0 1 0 146.285715-146.285715 146.285714 146.285714 0 0 0-83.382858 26.331429l-292.571428-258.194286A150.674286 150.674286 0 0 0 293.316023 438.857143a181.394286 181.394286 0 0 0 0-19.748572l468.114286-185.051428A146.285714 146.285714 0 1 0 878.45888 0z" p-id="4706" fill="#2c2c2c"></path></svg>Resource</div>
                <div className="header-footer-item"><svg t="1706784621910" className="header-footer-item-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8116" width="16" height="16"><path d="M948 890.2L758.3 700.5c22.8-28.2 41.5-59.3 55.7-93 20.4-48.1 30.7-99.2 30.7-151.9S834.4 351.9 814 303.8c-19.7-46.5-47.8-88.2-83.6-124s-77.5-64-124-83.6c-48.1-20.4-99.2-30.7-151.9-30.7S350.7 75.8 302.6 96.2c-46.5 19.7-88.2 47.8-124 83.6s-64 77.5-83.6 124C74.6 351.9 64.3 403 64.3 455.7S74.6 559.5 95 607.6c19.7 46.5 47.8 88.2 83.6 124s77.5 64 124 83.6c48.1 20.4 99.2 30.7 151.9 30.7s103.8-10.3 151.9-30.7c34.7-14.7 66.7-34.1 95.6-57.8l189.5 189.5c7.8 7.8 18 11.7 28.3 11.7s20.5-3.9 28.3-11.7c15.5-15.7 15.5-41-0.1-56.7zM454.5 765.9c-171 0-310.2-139.2-310.2-310.2s139.2-310.2 310.2-310.2 310.2 139.2 310.2 310.2-139.2 310.2-310.2 310.2z" fill="#2c2c2c" p-id="8117"></path></svg>Research</div>
                <div className="header-footer-item"><svg t="1706784726331" className="header-footer-item-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8243" width="16" height="16"><path d="M896 810.666667V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333zM362.666667 576l106.666666 128 149.333334-192 192 256H213.333333l149.333334-192z" p-id="8244" fill="#2c2c2c"></path></svg>Photos</div>
            </div>
        </div>
    );
}

export default Header;