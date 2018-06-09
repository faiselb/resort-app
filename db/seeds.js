const mongoose = require('mongoose');
const Resort = require('../models/Resort');
const Activity  = require('../models/Activity');
const User = require('../models/User');

mongoose.connect('mongodb://localhost/bookingdb')
    .then(() => {
        console.log('connected to database');
    })
    .catch((err) => {
        console.log('Error connecting to database', err);
    });

const db = mongoose.connection;

Resort.remove()
  .then(() => {
    User.remove().then(() => {
        const activity1 = new Activity({
            name: 'John Smith',
            activityType: 'surfing',
            date: new Date(),
            time:'8:00 pm'
        });

        const activity2 = new Activity({
            name: 'Adam Smith',
            activityType: 'hiking',
            date: new Date(),
            time: '9:00 am'
        });

        const resort1 = new Resort({
            name: 'Ritz',
            location: 'Atlanta',
            activities: [ activity1, activity2 ]
        });

        const resort2 = new Resort({
            name: 'Four Seasons',
            location: 'NYC',
            activities: [ activity1, activity2 ]
        });

        const resort3 = new Resort({
            name: 'St. Regis',
            location: 'Florida',
            activities: [ activity1, activity2 ]
        });

        const resort4 = new Resort({
            name: 'Nice Hotel',
            location: 'LA',
            activities: [ activity1, activity2 ]
        });

        const user1 = new User({
            username: 'John Adam',
            email: 'johnadam@gmail.com',
            signupmessage: 'Hello'
        });

        const user2 = new User({
            username: 'Jane Adam',
            email: 'janeadam@gmail.com',
            signupmessage: 'Hello Again'
        });

        const user3 = new User({
            username: 'Mark Smith',
            email: 'marksmith@gmail.com',
            signupmessage: 'Looking Forward to it'
        });

        const user4 = new User({
            username: 'Sara Smith',
            email: 'sarasmith@gmail.com',
            signupmessage: 'Sounds Great'
        });

        const resorts = [ resort1, resort2, resort3, resort4];
        const users = [ user1, user2, user3, user4 ];


        resorts.forEach((resort) => {
            resort.save()
                .then((resort) => {
                    console.log(`${resort.name} saved!`);
                })
                .catch((error) => {
                    console.log(error);
                });
        });

        users.forEach((user) => {
            user.save()
                .then((user) => {
                    console.log(`${user.username} saved users!`);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    });
});