import Navbar from "./navbar";

export default function Home() {
    return(
        <section className="home-section">
            <Navbar />
            <span className="btn-position">
             <button className="btn-blue">
                Add Todo
            </button>
            </span>

            <thead className="form-header">
                <h2>Delete Action</h2>
                <h2>S/N</h2>
                <h2>Title</h2>
                <h2>Description</h2>
                <h2>Status</h2>
                <h2>Confirmation</h2>
                <h2>Action</h2>
            </thead>

            <tbody className="form-field1">
                <tr>
                    <button className="btn-delete">
                        Delete
                    </button>
                </tr>

                <tr>1</tr>
                <tr>Learn Html</tr>
                <tr>Learn</tr>
                <tr>Not Completed</tr>

                <tr>
                    <button className="btn-confirm">Done</button>
                </tr>

                <tr className="btn-double">
                    <button className="btn-editview">Edit</button>
                    <button className="btn-editview">View</button>
                </tr>
            </tbody>
            
        </section>
    );

}