import quip from "quip";
import Styles from "./App.less";

export default class App extends React.Component {
    static propTypes = {
        content: React.PropTypes.instanceOf(quip.apps.RichTextRecord).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            collapsed: !props.content.empty(),
            editorWidth: quip.apps.getCurrentDimensions().width
        };
    }

    componentDidMount() {
        quip.apps.updateToolbar({
            toolbarCommandIds: ["toggle"],
            menuCommands: [
                {
                    "id": "toggle",
                    "label": "Toggle",
                    "handler": this._toggleCollapsing
                }
            ]
        })
    }

    _toggleCollapsing = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            editorWidth: quip.apps.getCurrentDimensions().width
        });
    }

    render() {
        return (
            <div className={Styles.container} >
                <div className={[this.state.collapsed ? Styles.hidden : Styles.trigger]}
                    onClick={this._toggleCollapsing}>
                    {this.state.collapsed ? "Hidden content" : "Hide"}
                </div>
                {!this.state.collapsed &&
                    <quip.apps.ui.RichTextBox
                        allowImages allowLists allowHeadings allowSpecialTextStyles
                        useDocumentTheme
                        width={this.state.editorWidth}
                        maxHeight="100%"
                        scrollable={false}
                        record={this.props.content}
                    />
                }
            </div>
        );
    }
}