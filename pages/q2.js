const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
        const response = await fetch('http://localhost:8080/questionaire/api/save', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            console.log('Data saved successfully!');
        } else {
            console.error('Failed to save data.');
        }
    } catch (error) {
        console.error('Error while saving data:', error);
    }


return (
    <form onSubmit={handleSubmit}>
        <label>
            Form Description:
            <input type="text" name="formDescription" />
        </label>

        <label>
            General Info:
            <input type="text" name="generalInfo" />
        </label>

        <label>
            First Name:
            <input type="text" name="firstName" />
        </label>

        <label>
            Last Name:
            <input type="text" name="lastName" />
        </label>

        <label>
            Home Address:
            <input type="text" name="homeAddress" />
        </label>

        <label>
            City:
            <input type="text" name="city" />
        </label>

        <label>
            State:
            <input type="text" name="state" />
        </label>

        <label>
            Phone Number:
            <input type="text" name="phoneNumber" />
        </label>

        <label>
            Email:
            <input type="email" name="email" />
        </label>

        <label>
            Academic Info:
            <input type="text" name="academicInfo" />
        </label>

        <label>
            2-4 Year:
            <input type="text" name="twoFourYear" />
        </label>

        <label>
            Start Rating Based Chart:
            <input type="text" name="startRatingBasedChart" />
        </label>

        <label>
            Rating Based Chart:
            <input type="text" name="ratingBasedChart" />
        </label>

        <label>
            GPA:
            <input type="text" name="gpa" />
        </label>

        <label>
            SAT:
            <input type="text" name="sat" />
        </label>

        <label>
            ACT:
            <input type="text" name="act" />
        </label>

        <button type="submit">Save</button>
    </form>
);
};
export default handleSubmit;