import { Outlet } from "react-router-dom"
export default function Projects() {
  return (
    <div>
      <section className="py-4">
        <Outlet context={{ linkText: "add project", tableHead: "Projects" }} />
      </section>
    </div>
  )
}
