import './WidgetSm.css';
import avatar from "../../image/avatar2.JPG"
import { Visibility } from '@material-ui/icons';

function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTile">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={avatar} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserNAme">Anwour Karim</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={avatar} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserNAme">Anwour Karim</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={avatar} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserNAme">Anwour Karim</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={avatar} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserNAme">Anwour Karim</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={avatar} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserNAme">Anwour Karim</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
