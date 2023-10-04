import "../assets/css/topBar.css"
import person from "../assets/images/person.jpg"

export default function TopBar() {
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary dashHead">
                <div class="container-fluid">
                    <div class="d-flex">
                        <img src={person} class="rounded-circle dashimg" alt="..." />
                        <h5 class="mt-3 ">Jane S.</h5>
                    </div>

                    <div>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success btnHead" type="submit">Search</button>
                        </form>
                    </div>
                    
                    <div>
                        <i class="fa-solid fa-bell"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}