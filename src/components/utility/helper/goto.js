import { useHistory } from "react-router-dom";
export default function Goto(url) {
  const history = useHistory();
  history.push(url);
}
