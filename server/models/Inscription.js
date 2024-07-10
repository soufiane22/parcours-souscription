class Inscription {
    constructor(firstName, lastName,birthdayDate,birthdayPlace,email,phoneNumber,postalCode,
        city,profession,familyStatus,circulationDate,model,marque,registration
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdayDate = birthdayDate;
      this.birthdayPlace = birthdayPlace;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.postalCode = postalCode;
      this.city = city;
      this.profession = profession;
      this.familyStatus = familyStatus;
      this.circulationDate = circulationDate;
      this.model = model;
      this.marque = marque;
      this.registration = registration;
    }
  
    static save(inscription, db, callback) {
      const sql = `INSERT INTO inscriptions      (firstName, lastName,birthdayDate,birthdayPlace,email,phoneNumber,
        postalCode,city,profession,familyStatus,circulationDate,model,marque,registration) 
      VALUES (?, ? ,? , ?, ?, ? ,? ,? ,? ,? ,? ,? ,? ,?)`;

      console.log( "inscription ",inscription);
      let values = [inscription.firstName, inscription.lastName, inscription.birthdayDate,
        inscription.birthdayPlace, inscription.email, inscription.phoneNumber,
        inscription.postalCode, inscription.city, inscription.profession,
        inscription.familyStatus, inscription.circulationDate, inscription.model,
        inscription.marque, inscription.registration
      ];

      console.log( "values ",values);
      db.run(sql,values, function (err) {
        if (err) {
          console.log( "error ",err);
          return callback(err);
        }
        console.log( { id: this.lastID, ...inscription });
        callback(null, { id: this.lastID, ...inscription });
      });
    }
  }
  
  module.exports = Inscription;