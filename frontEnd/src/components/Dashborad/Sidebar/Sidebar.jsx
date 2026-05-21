import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

function Sidebar({ isDraft }) {

    const links = [
        { icon: "fa-chart-line", title: "Status", path: "/status" },
        { icon: "fa-users", title: "users management", path: "/users" },
        { icon: "fa-building", title: "projects management", path: "/projects" },
        { icon: "fa-building", title: "Developers management", path: "/developers" },
        { icon: "fa-globe", title: "CMS", path: "/cms" },
        { icon: "fa-g", title: "live chat", path: "/chat" },
    ];

    return (
        <aside className={`${style.sidebar} min-vh-100 py-4`}>

            <div className="title fs-4 fw-semibold mb-3 px-4">
                Dashboard
            </div>

            <nav>

                {
                    links.map((item, index) => (

                        <NavLink
                            to={item.path}
                            className={`${style.navItem} py-4 px-3 d-flex align-items-center gap-3`}
                            key={index}
                        >

                            <i className={`fa-solid ${item.icon} ${style.icon}`}></i>

                            <span className={style.linkTitle}>
                                {item.title}
                            </span>

                            {
                                item.title === "users management" && isDraft && (
                                    <span className="badge bg-danger ms-2">
                                        Draft
                                    </span>
                                )
                            }

                        </NavLink>
                    ))
                }

            </nav>

        </aside>
    );
}

export default Sidebar;