import "./style.scss";

const NoData = ({message}) => {
    return (
        <li className="no-data">
            ---- {message} ----
        </li>
    )
}
export default NoData;