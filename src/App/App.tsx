import { View } from './View/View';
import { useContainer } from './Container/Container';

export function App() {
  let props = useContainer();
  // let {email,password,action_submit,form_data,form_errors,handleChange}=props;
  return <View
    {...props}
  />
}