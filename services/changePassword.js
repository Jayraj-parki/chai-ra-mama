export const changePassword = async ({ currentPassword,newPassword,confirmNewPassword,adminCred,setAlert}) => {
    if (!currentPassword?.trim() || !newPassword?.trim() || !confirmNewPassword?.trim()) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
      }
      else if (newPassword.trim() != confirmNewPassword.trim()) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Confirm password not matching with new password" })
      }
      else {
        try {
          const result = await fetch("/api/admin/changePassword", {
            method: "PATCH",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({
              _id:adminCred,
              password:currentPassword.trim(),
              newPassword:newPassword.trim()
            })
          })
          const data = await result.json()
          setAlert({ modalActive: true, workStatus: "done", message: data?.message })
          
        }
        catch (e) {
          console.log("Error: while changing error" + e)
        }
      }
}