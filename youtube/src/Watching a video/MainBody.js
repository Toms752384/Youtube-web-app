import Comments from "./Comments";
import Video from "./Video";

function MainBody() {
    return (
        <div className="col-md-8">
            <Video />
            <Comments />
        </div>
    );
}
export default MainBody;