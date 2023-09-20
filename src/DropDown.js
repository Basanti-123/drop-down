/* Task
create a dropdown  using countries name
based on the country name selected,
show hide, another select dropdown based on their cities*/

import { useState } from "react";

const countries = [
  {
    name: "Nepal",
    value: "np",
    cities: ["Kathmandu", "Bhaktapur", "Lalitpur"],
  },
  {
    name: "India",
    value: "in",
    cities: ["Banglore", "New Delhi", "Mumbi"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Karachi", "Lahore", "Islamabad"],
  },
];

export default function DropDown() {
    const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div>
      <select
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
      >
        <option value=""> Select a Country...</option>

        {countries &&
          countries.map((country, index) => {
            return (
              <option key={index} value={country?.value}>
                {country?.name}
              </option>
            );
          })}
      </select>

      {selectedCountry && (
        <>
          <select
            onChange={(e) => {
              console.log(e.target.value);
            }}
          >
            <option value=""> Select a City...</option>
            {countries &&
              countries
                .find((country) => country.value === selectedCountry)
                ?.cities.map((city, index) => {
                  return (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  );
                })}
          </select>
        </>
      )}
    </div>
    
  );
  
}
