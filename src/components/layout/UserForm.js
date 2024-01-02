"use client";
import EditableImage from "@/components/layout/EditableImage";
import { useState } from "react";
import { useProfile } from "../UseProfile";

export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [roomNumber, setRoomNumber] = useState(user?.roomNumber || "");
  const [dorm, setDorm] = useState(user?.dorm || "");
  const [admin, setAdmin] = useState(user?.admin || false);
  const { data: loggedInUserData } = useProfile();

  return (
    <div className="flex gap-4">
      <div>
        <div className="p-2 rounded-2xl relative max-w-[120px] ">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, { name: userName, image, phone, admin, roomNumber, dorm })
        }
      >
        <label>First and last name</label>
        <input
          type="text"
          placeholder="First and last name"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          disabled={true}
          value={user.email}
          placeholder={"email"}
        />
        <label>Phone</label>
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        />
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label>Room number</label>
            <input
              type="text"
              placeholder="Room number"
              value={roomNumber}
              onChange={(ev) => setRoomNumber(ev.target.value)}
            />
          </div>
          <div>
            <label>Dorm</label>
            <input
              type="text"
              placeholder="Dorm"
              value={dorm}
              onChange={(ev) => setDorm(ev.target.value)}
            />
          </div>
        </div>
        {loggedInUserData.admin && (
          <div>
            <label
              className="p-2 inline-flex items-center gap-2 mb-2"
              htmlFor="adminCb"
            >
              <input
                id="adminCb"
                type="checkbox"
                className=""
                value={"1"}
                checked={admin}
                onClick={(ev) => setAdmin(ev.target.checked)}
              />
              <span>Admin</span>
            </label>
          </div>
        )}
        <button type="submit" className="my-2">
          Save
        </button>
      </form>
    </div>
  );
}
