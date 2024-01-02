"use client";
import EditableImage from "@/components/layout/EditableImage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import UserTabs from "@/components/layout/UserTabs";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [dorm, setDorm] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
      setImage(session.data.user.image);
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setPhone(data.phone);
          setDorm(data.dorm);
          setRoomNumber(data.roomNumber);
          setIsAdmin(data.admin);
          setProfileFetched(true);
        });
      });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          image,
          phone,
          roomNumber,
          dorm,
        }),
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile saved!",
      error: "Error",
    });
  }

  if (status === "loading" || !profileFetched) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={isAdmin} />
      <div className="max-w lg mx-auto mt-8">
        <div className="flex gap-4">
          <div>
            <div className="p-2 rounded-2xl relative max-w-[120px] ">
              <EditableImage link={image} setLink={setImage} />
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
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
              placeholder={"email"}
              disabled={true}
              value={session.data.user.email}
            />
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
            <div className="flex gap-2">
              <div className="flex-grow">
                <label>Room number</label>
                <input
                  type="text"
                  placeholder="Room number"
                  value={roomNumber}
                  onChange={(ev) => setRoomNumber(ev.target.value)}
                />
              </div>
              <div className="flex-grow">
                <label>Dorm</label>
                <input
                  type="text"
                  placeholder="Dorm"
                  value={dorm}
                  onChange={(ev) => setDorm(ev.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="my-2">
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
