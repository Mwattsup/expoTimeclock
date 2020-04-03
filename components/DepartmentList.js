import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function DepartmentList({ navigation }) {

    const [departments, setDepartments] = useState(
        [
            {
                name: 'Human Resources',
                key: '1',
                budget: {
                    maxAmount: 100000,
                    used: 56234
                },
                employees: [
                    {name: 'David Smith', jobTitle: 'Chief Human Resources Officer', pay: 80000, hours: 40},
                    {name: 'Nicole Webster', jobTitle: 'HR Data Analyst', pay: 60000, hours: 40},
                    {name: 'Elizabeth White', jobTitle: 'HR Data Analyst', pay: 62000, hours: 40},
                    {name: 'Ray Reynolds', jobTitle: 'Recruitment Manager', pay: 40000, hours: 40},
                    {name: 'Andrew Burke', jobTitle: 'Learning Ambassador', pay: 42000, hours: 40},
                    {name: 'Francis Arme', jobTitle: 'Onboarding Success Coordinator', pay: 46000, hours: 40},
                    {name: 'Albert Fish', jobTitle: 'Onboarding Specialist', pay: 45000, hours: 40},
                    {name: 'Nhu Pham', jobTitle: 'Chief Ethical and Humane Use Officer', pay: 70000, hours: 440},
                    {name: 'Jennifer Warren', jobTitle: 'Hiring Manager', pay: 52000, hours: 40},
                    {name: 'Chloe Gomez', jobTitle: 'Corporate Wellness Specialist', pay: 58000, hours: 40},
                    {name: 'Brad Brent', jobTitle: 'Employee Success Program Manager', pay: 48000, hours: 40},
                    {name: 'Oliver Peck', jobTitle: 'Head of Employee Experience', pay: 46000, hours: 40}
                ]
            },
            {
                name: 'Rehabilitation',
                key: '2',
                budget: {
                    maxAmount: 120000,
                    used: 72258
                },
                employees: [
                    {name: 'Trisha Platz', jobTitle: 'Rehab Director', pay: 80000, hours: 40},
                    {name: 'Stephanie Price', jobTitle: 'Nurse Manager', pay: 68000, hours: 40},
                    {name: 'Marcia Crosby', jobTitle: 'Registered Nurse', pay: 44000, hours: 36},
                    {name: 'Shelby Davidson', jobTitle: 'Registered Nurse', pay: 43000, hours: 36},
                    {name: 'Adriana Lopez', jobTitle: 'Registered Nurse', pay: 44000, hours: 36},
                    {name: 'Abby Flemming', jobTitle: 'Registered Nurse', pay: 42000, hours: 36},
                    {name: 'Stephanie Waters', jobTitle: 'Registered Nurse', pay: 43000, hours: 36},
                    {name: 'Erika Vasquez', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36},
                    {name: 'Andrea Desperado', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36},
                    {name: 'Matthew White', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36},
                    {name: 'Austin Andrews', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36},
                    {name: 'Dania Espinoza', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36}
                ]
            },
            {
                name: 'Orthopedic',
                key: '3', 
                budget: {
                    maxAmount: 150000,
                    used: 92854
                },
                employees: [
                    {name: 'Brendan Jordan', jobTitle: 'Orthopedic Director', pay: 81000, hours: 40},
                    {name: 'Morwenna Clay', jobTitle: 'Nurse Manager', pay: 69000, hours: 40},
                    {name: 'Kenneth Chester', jobTitle: 'Registered Nurse', pay: 43000, hours: 36},
                    {name: 'Trevor Drummond', jobTitle: 'Registered Nurse', pay: 44000, hours: 36},
                    {name: 'Frida Mackenzie', jobTitle: 'Registered Nurse', pay: 43000, hours: 36},
                    {name: 'Samiyah Simmonds', jobTitle: 'Registered Nurse', pay: 42000, hours: 36},
                    {name: 'Luisa Bonilla', jobTitle: 'Registered Nurse', pay: 41000, hours: 36},
                    {name: 'Tobey Eastwood', jobTitle: 'Registered Nurse', pay: 22000, hours: 12},
                    {name: 'Kameron Ferreira', jobTitle: 'Registered Nurse', pay: 42000, hours: 36},
                    {name: 'Mattie Grainger', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36},
                    {name: 'Sinead Stevens', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36},
                    {name: 'Ned Davison', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36}
                ]
            },
            {
                name: 'Neuro',
                key: '4',
                budget: {
                    maxAmount: 200000,
                    used: 126244
                },
                employees: [
                    {name: 'Andrei Lynch', jobTitle: 'Neurology Director', pay: 90000, hours: 40},
                    {name: 'Daniella Edge', jobTitle: 'Nurse Manager', pay: 74000, hours: 40},
                    {name: 'Kylie Vance', jobTitle: 'Registered Nurse', pay: 45000, hours: 36},
                    {name: 'Alexander Valentine', jobTitle: 'Registered Nurse', pay: 47000, hours: 36},
                    {name: 'Idris Mcintyre', jobTitle: 'Registered Nurse', pay: 30000, hours: 24},
                    {name: 'Viktoria Poole', jobTitle: 'Registered Nurse', pay: 50000, hours: 36},
                    {name: 'Nathanial Reid', jobTitle: 'Registered Nurse', pay: 32000, hours: 24},
                    {name: 'Milo Nairn', jobTitle: 'Registered Nurse', pay: 52000, hours: 36},
                    {name: 'Stanley Becker', jobTitle: 'Registered Nurse', pay: 48000, hours: 36},
                    {name: 'Harriet Novak', jobTitle: 'Patient Care Technician', pay: 8000, hours: 12},
                    {name: 'Ronny Dunn', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36},
                    {name: 'Lilianna Munro', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36}
                ]
            },
            {
                name: 'ICU',
                key: '5',
                budget: {
                    maxAmount: 250000,
                    used: 166261
                },
                employees: [
                    {name: 'Karina Quinn', jobTitle: 'ICU Director', pay: 93000, hours: 40},
                    {name: 'Mateo Tillman', jobTitle: 'Nurse Manager', pay: 79000, hours: 40},
                    {name: 'Blair Oneil', jobTitle: 'Registered Nurse', pay: 50000, hours: 36},
                    {name: 'Corban Caldwell', jobTitle: 'Registered Nurse', pay: 52000, hours: 36},
                    {name: 'Myra May', jobTitle: 'Registered Nurse', pay: 55000, hours: 36},
                    {name: 'Serena Ferreira', jobTitle: 'Registered Nurse', pay: 52000, hours: 36},
                    {name: 'Tim Curtis', jobTitle: 'Registered Nurse', pay: 53000, hours: 36},
                    {name: 'Brayden Barnard', jobTitle: 'Registered Nurse', pay: 54000, hours: 36},
                    {name: 'Lilian Mcguire', jobTitle: 'Registered Nurse', pay: 50000, hours: 36},
                    {name: 'Klaudia Redman', jobTitle: 'Patient Care Technician', pay: 27000, hours: 36},
                    {name: 'Levi Haines', jobTitle: 'Patient Care Technician', pay: 27000, hours: 36},
                    {name: 'Neil Wagner', jobTitle: 'Patient Care Technician', pay: 27000, hours: 36}
                ]
            },
            {
                name: 'Emergency Department',
                key: '6',
                budget: {
                    maxAmount: 250000,
                    used: 134281
                },
                employees: [
                    {name: 'Taliah Cannon', jobTitle: 'ED Director', pay: 100000, hours: 40},
                    {name: 'Camilla Pemberton', jobTitle: 'Nurse Manager', pay: 84000, hours: 40},
                    {name: 'Giles Harrell', jobTitle: 'Registered Nurse', pay: 56000, hours: 36},
                    {name: 'Rikesh Ventura', jobTitle: 'Registered Nurse', pay: 56000, hours: 36},
                    {name: 'Stephan Schofield', jobTitle: 'Registered Nurse', pay: 57000, hours: 36},
                    {name: 'Olli Hewitt', jobTitle: 'Registered Nurse', pay: 55000, hours: 36},
                    {name: 'Brittany Richardson', jobTitle: 'Registered Nurse', pay: 58000, hours: 36},
                    {name: 'Matas Knowles', jobTitle: 'Registered Nurse', pay: 57000, hours: 36},
                    {name: 'Taybah Lynch', jobTitle: 'Registered Nurse', pay: 58000, hours: 36},
                    {name: 'Seth Powell', jobTitle: 'Patient Care Technician', pay: 28000, hours: 36},
                    {name: 'Arianna Blanchard', jobTitle: 'Patient Care Technician', pay: 28000, hours: 36},
                    {name: 'Garry Rose', jobTitle: 'Patient Care Technician', pay: 28000, hours: 36}
                ]
            },
            {
                name: 'Cardiac',
                key: '7',
                budget: {
                    maxAmount: 220000,
                    used: 176226
                },
                employees: [
                    {name: 'Elisabeth Weston', jobTitle: 'Cardiology Director', pay: 92000, hours: 40},
                    {name: 'Nel Hirst', jobTitle: 'Nurse Manager', pay: 76000, hours: 40},
                    {name: 'Simona Marriott', jobTitle: 'Registered Nurse', pay: 45000, hours: 36},
                    {name: 'Neha Massey', jobTitle: 'Registered Nurse', pay: 46000, hours: 36},
                    {name: 'Jade Mccabe', jobTitle: 'Registered Nurse', pay: 46000, hours: 36},
                    {name: 'Blade Currie', jobTitle: 'Registered Nurse', pay: 44000, hours: 36},
                    {name: 'Bella-Rose Martins', jobTitle: 'Registered Nurse', pay: 47000, hours: 36},
                    {name: 'Robert Durham', jobTitle: 'Registered Nurse', pay: 45000, hours: 36},
                    {name: 'David Finch', jobTitle: 'Registered Nurse', pay: 44000, hours: 36},
                    {name: 'Aisha Swan', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36},
                    {name: 'Aaron Shaffer', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36},
                    {name: 'Jethro Houston', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36}
                ]
            },
            {
                name: 'Maternity',
                key: '8',
                budget: {
                    maxAmount: 180000,
                    used: 86335
                },
                employees: [
                    {name: 'Aliyah Hubbard', jobTitle: 'Maternity Director', pay: 88000, hours: 40},
                    {name: 'Hallie Cook', jobTitle: 'Nurse Manager', pay: 79000, hours: 40},
                    {name: 'Kathryn Taylor', jobTitle: 'Registered Nurse', pay: 45000, hours: 36},
                    {name: 'Evelina Bains', jobTitle: 'Registered Nurse', pay: 47000, hours: 36},
                    {name: 'Maiya Figueroa', jobTitle: 'Registered Nurse', pay: 45000, hours: 36},
                    {name: 'Jude Nash', jobTitle: 'Registered Nurse', pay: 46000, hours: 36},
                    {name: 'Sharon Patton', jobTitle: 'Registered Nurse', pay: 42000, hours: 36},
                    {name: 'Isobel Klein', jobTitle: 'Registered Nurse', pay: 48000, hours: 36},
                    {name: 'Daisy Carney', jobTitle: 'Registered Nurse', pay: 45000, hours: 36},
                    {name: 'Milli Estes', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36},
                    {name: 'Safiya Mcdougall', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36},
                    {name: 'Colette Buck', jobTitle: 'Patient Care Technician', pay: 26000, hours: 36}
                ]
            },
            {
                name: 'Radiology',
                key: '9',
                budget: {
                    maxAmount: 120000,
                    used: 43264
                },
                employees: [
                    {name: 'Emily-Jane Hardy', jobTitle: 'Radiology Director', pay: 80000, hours: 40},
                    {name: 'Abiha Whitney', jobTitle: 'Technician', pay: 40000, hours: 40},
                    {name: 'Jaeden Stout', jobTitle: 'Technician', pay: 44000, hours: 40},
                    {name: 'Dawson Griffiths', jobTitle: 'Technician', pay: 46000, hours: 40},
                    {name: 'Taio Tang', jobTitle: 'Technician', pay: 50000, hours: 40},
                    {name: 'Bobby Guy', jobTitle: 'Technician', pay: 48000, hours: 40},
                    {name: 'Bjorn Hayward', jobTitle: 'Swallow Therapist', pay: 65000, hours: 40},
                    {name: 'Alima Mill', jobTitle: 'Swallow Therapist', pay: 63000, hours: 40},
                    {name: 'Jesus Redmond', jobTitle: 'Transporter', pay: 24000, hours: 40},
                    {name: 'Viktor Beil', jobTitle: 'Transporter', pay: 24000, hours: 40},
                    {name: 'Paloma Vincent', jobTitle: 'Transporter', pay: 24000, hours: 40},
                    {name: 'Kelise Hess', jobTitle: 'Transporter', pay: 24000, hours: 40}
                ]
            },
            {
                name: 'Security',
                key: '10',
                budget: {
                    maxAmount: 100000,
                    used: 56234
                },
                employees: [
                    {name: 'Sasha Johns', jobTitle: 'Director of Secuirity', pay: '', hours: 0},
                    {name: 'Zachariah Coffey', jobTitle: 'Secuirity Officer', pay: '', hours: 0},
                    {name: 'Kanye Harding', jobTitle: 'Secuirity Officer', pay: '', hours: 0},
                    {name: 'Tyler Burris', jobTitle: 'Secuirity Officer', pay: '', hours: 0},
                    {name: 'Marco Houghton', jobTitle: 'Secuirity Officer', pay: '', hours: 0},
                    {name: 'Omer Richardson', jobTitle: 'Secuirity Officer', pay: '', hours: 0},
                    {name: 'Barbara Waters', jobTitle: 'Secuirity Officer', pay: '', hours: 0},
                ]
            },
            {
                name: 'IT',
                key: '11',
                budget: {
                    maxAmount: 100000,
                    used: 56234
                },
                employees: [
                    {name: 'Taliyah Mill', jobTitle: '', pay: '', hours: 0},
                    {name: 'Dawson Frederick', jobTitle: '', pay: '', hours: 0},
                    {name: 'Miley Harmon', jobTitle: '', pay: '', hours: 0},
                    {name: 'Bob Zhang', jobTitle: '', pay: '', hours: 0},
                    {name: 'Robyn Cote', jobTitle: '', pay: '', hours: 0},
                    {name: 'Cobie Donovan', jobTitle: '', pay: '', hours: 0},
                    {name: 'Carmel Schwartz', jobTitle: '', pay: '', hours: 0},
                    {name: 'Conal Drummond', jobTitle: '', pay: '', hours: 0},
                    {name: 'Alina Nicholson', jobTitle: '', pay: '', hours: 0},
                    {name: 'Danniella Glover', jobTitle: '', pay: '', hours: 0},
                    {name: 'Christie Britton', jobTitle: '', pay: '', hours: 0},
                    {name: 'Luka Witt', jobTitle: '', pay: '', hours: 0}
                ]
            },
            {
                name: 'Environmental Services',
                key: '12',
                budget: {
                    maxAmount: 120000,
                    used: 56234
                },
                employees: [
                    {name: 'Jarrad Choi', jobTitle: 'Director of Environmental Services', pay: '', hours: 0},
                    {name: 'Jesus Barlow', jobTitle: 'Environmental Services Technician', pay: '', hours: 0},
                    {name: 'Haley Pemberton', jobTitle: 'Environmental Services Technician', pay: '', hours: 0},
                    {name: 'Darrel Carver', jobTitle: 'Environmental Services Technician', pay: '', hours: 0},
                    {name: 'Paolo Palme', jobTitle: 'Environmental Services Technician', pay: '', hours: 0},
                    {name: 'Kaylan Velez', jobTitle: 'Environmental Services Technician', pay: '', hours: 0},
                    {name: 'Billy Werner', jobTitle: 'Environmental Services Manager', pay: '', hours: 0},
                    {name: 'Priyanka Hirst', jobTitle: 'Environmental Services Dispatcher', pay: '', hours: 0},
                    {name: 'Jorden Sellers', jobTitle: 'Environmental Services Waste Control', pay: '', hours: 0}
                ]
            },
        ]);

    const pressHandler = () => {
        navigation.gobBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Departments</Text>
            <FlatList style={styles.container} data={departments} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('EmployeePage', item )} style={styles.buttons}>
                    <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: hp('100%'),

    },
    buttons: {
        borderWidth: 2,
        borderColor: '#303030',
        height: hp('6%'),
        width: wp('90%'),
        marginRight: wp('5%'),
        marginLeft: wp('6%'),
        marginBottom: hp('2%'),
        backgroundColor: '#151515',
        borderRadius: 10,
    },
    title: {
        color: 'white',
        fontSize: hp('5%'),
        textAlign: 'center',
        paddingTop: hp('10%'),
        marginBottom: hp('5%')
    },
    name: {
        fontSize: hp('3%'),
        textAlign: 'center',
        paddingTop: hp('1%'),
        color: 'white'
    }
});
