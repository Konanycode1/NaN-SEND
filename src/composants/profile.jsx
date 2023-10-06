import "../assets/css/profile.css"
import person from "../assets/images/person.jpg"


export default function Profile() {
    return(
        <>
            <div className="profilCard">
                <div class="card col-10 m-">
                    <div class="row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <div class="card">
                                <h1 className="m-5">Profile</h1>
                                <div class="card-body ">
                                    <div className="mx-auto col-6 mb-4 cardProfilImg">
                                        <img src={person} alt="" className="rounded-circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mt-5 profile_Email">
                            <div class="card mt-5">
                                <div class="card-body ">
                                    <div class="card ">
                                        <div class="card-body">
                                            <h1>Email</h1>
                                            <p className="mt-5">abrahamkonan@gmail.com</p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <h1>Nom Et Prenom</h1>
                                            <p className="mt-5">Abraham konan</p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <h1>Langue</h1>
                                            <p className="mt-5">Français</p>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}