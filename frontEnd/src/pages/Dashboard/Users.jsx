import { Outlet } from "react-router-dom"
export default function Users() {
  return (
    <div>

      <section className="py-4">
        <Outlet context={{ linkText: "add user", tableHead: "Users" }} />
      </section>
    </div>
  )
}
