import React from "react";
import { AddImage, AddArtist } from "./AddPlus";
import { Link } from "react-router-dom";

// Add Song page
export default function AddSong() {
    return (
        <div className="container-fluid col-md-8">
        <h1>Add Song</h1>
        <form>
            <div className="col-md-12">
                <div class="form-group row">
                    <label for="songName" class="col-sm-2 col-form-label">Song Name</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="dateReleased" class="col-sm-2 col-form-label">Date Released</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="songName" class="col-sm-2 col-form-label">Artwork</label>
                    <div class="col-sm-10">
                    <button><AddImage /></button>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="artists" class="col-sm-2 col-form-label">Artists</label>
                    <div class="col-sm-7">
                    <input type="text" class="form-control"></input>
                    </div>
                    <div class="col-sm-3"><button><AddArtist /></button></div>
                </div>
                <div class="form-group row">
                    <div className=" col-md-6">
                    <Link to="/">
                        <button type="cancel" class="btn btn-primary">Cancel</button>
                    </Link>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
}