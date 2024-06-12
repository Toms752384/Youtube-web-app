import Comments from "./Comments";
import Video from "./Video";

function MainBody({ currentVideo }) {
    return (
        <div className="col-md-8">
            <Video currentVideo={ currentVideo }/>
            <Comments />
        </div>
    );
}
export default MainBody;