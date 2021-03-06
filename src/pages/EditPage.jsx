// NPM packages
import { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

// Project files
import Information from "../components/Information";
import { useRestaurant } from "../state/RestaurantProvider";
import { createDocument, updateDocument } from "../scripts/firestore";
import DishList from "../components/DishList";

export default function EditPage() {
  // Global state
  const { id } = useParams();
  const { categories, dispatch } = useRestaurant();
  const history = useHistory();

  // Local state
  const [profile, setProfile] = useState(findProfile(categories, id));

  // Methods
  function findProfile(categories, id) {
    const existingProfile = categories.find((item) => item.id === id);
    const newProfile = { name: "", description: "", imageURL: "" };

    return existingProfile === undefined ? newProfile : existingProfile;
  }

  function onSave(profile) {
    id === "new-profile" ? onCreateProfile(profile) : onUpdateProfile(profile);
    history.push("/admin");
  }

  function onChange(key, value) {
    const field = { [key]: value };

    setProfile({ ...profile, ...field });
  }

  async function onCreateProfile(profile) {
    profile.id = await createDocument("dishes", profile);
    dispatch({ type: "CREATE_PROFILE", payload: profile });
  }

  async function onUpdateProfile(profile) {
    await updateDocument("dishes", profile);
    dispatch({ type: "UPDATE_PROFILE", payload: profile });
  }

  return (
    <div className="edit-page">
      <header>
        <h1>Edit page</h1>
      </header>
      <Information profile={profile} onChange={onChange} />
      <button onClick={() => onSave(profile)} className="button-save">
        Save
      </button>
      <Link to="/admin" id="button-add">
        Go back
      </Link>
      {id === "new-profile" ? null : <DishList categoryId={id} />}
    </div>
  );
}