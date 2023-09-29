import React from "react";
import style from "./adminFooter.module.scss";
import Image from "next/image";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const AdminFooter = () => {

    return (
        <div className={style.footer + " container-fluid m-0 p-0 "}>
            <div className={style.footerInner + "  d-flex justify-content-center mx-auto m-0 p-0  "}>
                <div className={style.footerItem + "   row col-10 d-flex mx-auto mt-2 "}>
                    <div className={" row col-12  mx-auto py-2"}>
                        <div className={style.socialMedia + " row col-23 mx-auto d-flex justify-content-center "}>
                            <Link className="col-auto  text-decoration-none text-light mx-2" href={"#"}>
                                <FacebookIcon className={style.icon + " h3 m-0 p-0 "} />
                            </Link>
                            <Link className="col-auto  text-decoration-none text-light mx-2" href={"#"}>
                                <InstagramIcon className={style.icon + " h3 m-0 p-0 "} />
                            </Link>
                            <Link className="col-auto  text-decoration-none text-light mx-2" href={"#"}>
                                <TwitterIcon className={style.icon + " h3 m-0 p-0 "} />
                            </Link>
                            <Link className="col-auto  text-decoration-none text-light mx-2" href="#">
                                <YouTubeIcon className={style.icon + " h3 m-0 p-0 "} />
                            </Link>
                        </div>
                        <div className={style.copyright + " row col-12 mx-auto d-flex justify-content-center mt-3"}>
                            <p className="col-6 text-center">&copy; Copyright 2020. All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminFooter;