import { Iprops } from "../../Model/Model";

export function View(props: Iprops) {

  return (
    <div>
      <form onSubmit={props.action_submit}>
        <div>
          <input
            name="email"
            type="email"
            value={props.form_data.email}
            onChange={props.handleChange}
            placeholder="email@example.com"
          />
        </div>
        <div>
          {
            props.form_errors.email
          }
        </div>
        <div>
          <input
            name="password"
            type="password"
            value={props.form_data.password}
            onChange={props.handleChange}
            placeholder="password"
          />
        </div>
        <div>
          {
            props.form_errors.password
          }
        </div>
        <div>
          <input
            name="checkbox"
            type="checkbox"
          />
          {
            props.form_errors.isagreed
          }
          <button type="submit">Submit</button>
        </div>
      </form>
      <h2>email:{props.email}</h2>
      <h2>password:{props.password}</h2>
    </div>
  )
}