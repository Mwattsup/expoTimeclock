import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function DepartmentScreen({ navigation }) {

    const [departments, setDepartments] = useState(
        [
            {
                name: 'Human Resources',
                key: '1',
                budget: {
                    maxAmount: 720000,
                    used: 56234
                },
                employees: [
                    { name: 'David Smith', jobTitle: 'Chief Human Resources Officer', pay: 80000, hours: 40, key: 1 },
                    { name: 'Nicole Webster', jobTitle: 'HR Data Analyst', pay: 60000, hours: 40, key: 2 },
                    { name: 'Elizabeth White', jobTitle: 'HR Data Analyst', pay: 62000, hours: 40, key: 3 },
                    { name: 'Ray Reynolds', jobTitle: 'Recruitment Manager', pay: 40000, hours: 40, key: 4 },
                    { name: 'Andrew Burke', jobTitle: 'Learning Ambassador', pay: 42000, hours: 40, key: 5 },
                    { name: 'Francis Arme', jobTitle: 'Onboarding Success Coordinator', pay: 46000, hours: 40, key: 6 },
                    { name: 'Albert Fish', jobTitle: 'Onboarding Specialist', pay: 45000, hours: 40, key: 7 },
                    { name: 'Nhu Pham', jobTitle: 'Chief Ethical and Humane Use Officer', pay: 70000, hours: 440, key: 8 },
                    { name: 'Jennifer Warren', jobTitle: 'Hiring Manager', pay: 52000, hours: 40, key: 9 },
                    { name: 'Chloe Gomez', jobTitle: 'Corporate Wellness Specialist', pay: 58000, hours: 40, key: 10 },
                    { name: 'Brad Brent', jobTitle: 'Employee Success Program Manager', pay: 48000, hours: 40, key: 11 },
                    { name: 'Oliver Peck', jobTitle: 'Head of Employee Experience', pay: 46000, hours: 40, key: 12 }
                ]
            },
            {
                name: 'Rehabilitation',
                key: '2',
                budget: {
                    maxAmount: 5900000,
                    used: 72258
                },
                employees: [
                    { name: 'Trisha Platz', jobTitle: 'Rehab Director', pay: 80000, hours: 40, key: 13 },
                    { name: 'Stephanie Price', jobTitle: 'Nurse Manager', pay: 68000, hours: 40, key: 14 },
                    { name: 'Marcia Crosby', jobTitle: 'Registered Nurse', pay: 44000, hours: 36, key: 15 },
                    { name: 'Shelby Davidson', jobTitle: 'Registered Nurse', pay: 43000, hours: 36, key: 16 },
                    { name: 'Adriana Lopez', jobTitle: 'Registered Nurse', pay: 44000, hours: 36, key: 17 },
                    { name: 'Abby Flemming', jobTitle: 'Registered Nurse', pay: 42000, hours: 36, key: 18 },
                    { name: 'Stephanie Waters', jobTitle: 'Registered Nurse', pay: 43000, hours: 36, key: 19 },
                    { name: 'Erika Vasquez', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36, key: 20 },
                    { name: 'Andrea Desperado', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36, key: 21 },
                    { name: 'Matthew White', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36, key: 22 },
                    { name: 'Austin Andrews', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36, key: 23 },
                    { name: 'Dania Espinoza', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36, key: 24 }
                ]
            },
            {
                name: 'Orthopedic',
                key: '3',
                budget: {
                    maxAmount: 675000,
                    used: 92854
                },
                employees: [
                    { name: 'Brendan Jordan', jobTitle: 'Orthopedic Director', pay: 81000, hours: 40, key: 25 },
                    { name: 'Morwenna Clay', jobTitle: 'Nurse Manager', pay: 69000, hours: 40, key: 26 },
                    { name: 'Kenneth Chester', jobTitle: 'Registered Nurse', pay: 43000, hours: 36, key: 27 },
                    { name: 'Trevor Drummond', jobTitle: 'Registered Nurse', pay: 44000, hours: 36, key: 28 },
                    { name: 'Frida Mackenzie', jobTitle: 'Registered Nurse', pay: 43000, hours: 36, key: 29 },
                    { name: 'Samiyah Simmonds', jobTitle: 'Registered Nurse', pay: 42000, hours: 36, key: 30 },
                    { name: 'Luisa Bonilla', jobTitle: 'Registered Nurse', pay: 41000, hours: 36, key: 31 },
                    { name: 'Tobey Eastwood', jobTitle: 'Registered Nurse', pay: 22000, hours: 12, key: 32 },
                    { name: 'Kameron Ferreira', jobTitle: 'Registered Nurse', pay: 42000, hours: 36, key: 33 },
                    { name: 'Mattie Grainger', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36, key: 34 },
                    { name: 'Sinead Stevens', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36, key: 35 },
                    { name: 'Ned Davison', jobTitle: 'Patient Care Technician', pay: 24000, hours: 36, key: 36 }
                ]
            },
            {
                name: 'Neuro',
                key: '4',
                budget: {
                    maxAmount: 650000,
                    used: 126244
                },
                employees: [
                    { name: 'Andrei Lynch', jobTitle: 'Neurology Director', pay: 90000, hours: 40, key: 37 },
                    { name: 'Daniella Edge', jobTitle: 'Nurse Manager', pay: 74000, hours: 40, key: 38 },
                    { name: 'Kylie Vance', jobTitle: 'Registered Nurse', pay: 45000, hours: 36, key: 39 },
                    { name: 'Alexander Valentine', jobTitle: 'Registered Nurse', pay: 47000, hours: 36, key: 40 },
                    { name: 'Idris Mcintyre', jobTitle: 'Registered Nurse', pay: 30000, hours: 24, key: 41 },
                    { name: 'Viktoria Poole', jobTitle: 'Registered Nurse', pay: 50000, hours: 36, key: 42 },
                    { name: 'Nathanial Reid', jobTitle: 'Registered Nurse', pay: 32000, hours: 24, key: 43 },
                    { name: 'Milo Nairn', jobTitle: 'Registered Nurse', pay: 52000, hours: 36, key: 44 },
                    { name: 'Stanley Becker', jobTitle: 'Registered Nurse', pay: 48000, hours: 36, key: 45 },
                    { name: 'Harriet Novak', jobTitle: 'Patient Care Technician', pay: 8000, hours: 12, key: 46 },
                    { name: 'Ronny Dunn', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36, key: 47 },
                    { name: 'Lilianna Munro', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36, key: 48 }
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
                    { name: 'Karina Quinn', jobTitle: 'ICU Director', pay: 93000, hours: 40, key: 49 },
                    { name: 'Mateo Tillman', jobTitle: 'Nurse Manager', pay: 79000, hours: 40, key: 50 },
                    { name: 'Blair Oneil', jobTitle: 'Registered Nurse', pay: 50000, hours: 36, key: 51 },
                    { name: 'Corban Caldwell', jobTitle: 'Registered Nurse', pay: 52000, hours: 36, key: 52 },
                    { name: 'Myra May', jobTitle: 'Registered Nurse', pay: 55000, hours: 36, key: 53 },
                    { name: 'Serena Ferreira', jobTitle: 'Registered Nurse', pay: 52000, hours: 36, key: 54 },
                    { name: 'Tim Curtis', jobTitle: 'Registered Nurse', pay: 53000, hours: 36, key: 55 },
                    { name: 'Brayden Barnard', jobTitle: 'Registered Nurse', pay: 54000, hours: 36, key: 56 },
                    { name: 'Lilian Mcguire', jobTitle: 'Registered Nurse', pay: 50000, hours: 36, key: 57 },
                    { name: 'Klaudia Redman', jobTitle: 'Patient Care Technician', pay: 27000, hours: 36, key: 58 },
                    { name: 'Levi Haines', jobTitle: 'Patient Care Technician', pay: 27000, hours: 36, key: 59 },
                    { name: 'Neil Wagner', jobTitle: 'Patient Care Technician', pay: 27000, hours: 36, key: 60 }
                ]
            },
            {
                name: 'Emergency Department',
                key: '6',
                budget: {
                    maxAmount: 360000,
                    used: 134281
                },
                employees: [
                    { name: 'Taliah Cannon', jobTitle: 'ED Director', pay: 100000, hours: 40, key: 61 },
                    { name: 'Camilla Pemberton', jobTitle: 'Nurse Manager', pay: 84000, hours: 40, key: 62 },
                    { name: 'Giles Harrell', jobTitle: 'Registered Nurse', pay: 56000, hours: 36, key: 63 },
                    { name: 'Rikesh Ventura', jobTitle: 'Registered Nurse', pay: 56000, hours: 36, key: 64 },
                    { name: 'Stephan Schofield', jobTitle: 'Registered Nurse', pay: 57000, hours: 36, key: 65 },
                    { name: 'Olli Hewitt', jobTitle: 'Registered Nurse', pay: 55000, hours: 36, key: 66 },
                    { name: 'Brittany Richardson', jobTitle: 'Registered Nurse', pay: 58000, hours: 36, key: 67 },
                    { name: 'Matas Knowles', jobTitle: 'Registered Nurse', pay: 57000, hours: 36, key: 68 },
                    { name: 'Taybah Lynch', jobTitle: 'Registered Nurse', pay: 58000, hours: 36, key: 69 },
                    { name: 'Seth Powell', jobTitle: 'Patient Care Technician', pay: 28000, hours: 36, key: 70 },
                    { name: 'Arianna Blanchard', jobTitle: 'Patient Care Technician', pay: 28000, hours: 36, key: 71 },
                    { name: 'Garry Rose', jobTitle: 'Patient Care Technician', pay: 28000, hours: 36, key: 72 }
                ]
            },
            {
                name: 'Cardiac',
                key: '7',
                budget: {
                    maxAmount: 560000,
                    used: 176226
                },
                employees: [
                    { name: 'Elisabeth Weston', jobTitle: 'Cardiology Director', pay: 92000, hours: 40, key: 73 },
                    { name: 'Nel Hirst', jobTitle: 'Nurse Manager', pay: 76000, hours: 40, key: 74 },
                    { name: 'Simona Marriott', jobTitle: 'Registered Nurse', pay: 45000, hours: 36, key: 75 },
                    { name: 'Neha Massey', jobTitle: 'Registered Nurse', pay: 46000, hours: 36, key: 76 },
                    { name: 'Jade Mccabe', jobTitle: 'Registered Nurse', pay: 46000, hours: 36, key: 77 },
                    { name: 'Blade Currie', jobTitle: 'Registered Nurse', pay: 44000, hours: 36, key: 78 },
                    { name: 'Bella-Rose Martins', jobTitle: 'Registered Nurse', pay: 47000, hours: 36, key: 79 },
                    { name: 'Robert Durham', jobTitle: 'Registered Nurse', pay: 45000, hours: 36, key: 80 },
                    { name: 'David Finch', jobTitle: 'Registered Nurse', pay: 44000, hours: 36, key: 81 },
                    { name: 'Aisha Swan', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36, key: 82 },
                    { name: 'Aaron Shaffer', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36, key: 83 },
                    { name: 'Jethro Houston', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36, key: 84 }
                ]
            },
            {
                name: 'Maternity',
                key: '8',
                budget: {
                    maxAmount: 561000,
                    used: 86335
                },
                employees: [
                    { name: 'Aliyah Hubbard', jobTitle: 'Maternity Director', pay: 88000, hours: 40, key: 1111111 },
                    { name: 'Hallie Cook', jobTitle: 'Nurse Manager', pay: 79000, hours: 40, key: 555555 },
                    { name: 'Kathryn Taylor', jobTitle: 'Registered Nurse', pay: 45000, hours: 40, key: 6666666 },
                    { name: 'Evelina Bains', jobTitle: 'Registered Nurse', pay: 47000, hours: 40, key: 333333 },
                    { name: 'Maiya Figueroa', jobTitle: 'Registered Nurse', pay: 45000, hours: 40, key: 2222222 },
                    { name: 'Jude Nash', jobTitle: 'Registered Nurse', pay: 46000, hours: 36, key: 90 },
                    { name: 'Sharon Patton', jobTitle: 'Registered Nurse', pay: 42000, hours: 36, key: 91 },
                    { name: 'Isobel Klein', jobTitle: 'Registered Nurse', pay: 48000, hours: 36, key: 92 },
                    { name: 'Daisy Carney', jobTitle: 'Registered Nurse', pay: 45000, hours: 36, key: 93 },
                    { name: 'Milli Estes', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36, key: 94 },
                    { name: 'Safiya Mcdougall', jobTitle: 'Patient Care Technician', pay: 25000, hours: 36, key: 95 },
                    { name: 'Colette Buck', jobTitle: 'Patient Care Technician', pay: 26000, hours: 36, key: 96 }
                ]
            },
            {
                name: 'Radiology',
                key: '9',
                budget: {
                    maxAmount: 532000,
                    used: 43264
                },
                employees: [
                    { name: 'Emily-Jane Hardy', jobTitle: 'Radiology Director', pay: 80000, hours: 40, key: 97 },
                    { name: 'Abiha Whitney', jobTitle: 'Technician', pay: 40000, hours: 40, key: 98 },
                    { name: 'Jaeden Stout', jobTitle: 'Technician', pay: 44000, hours: 40, key: 99 },
                    { name: 'Dawson Griffiths', jobTitle: 'Technician', pay: 46000, hours: 40, key: 100 },
                    { name: 'Taio Tang', jobTitle: 'Technician', pay: 50000, hours: 40, key: 101 },
                    { name: 'Bobby Guy', jobTitle: 'Technician', pay: 48000, hours: 40, key: 102 },
                    { name: 'Bjorn Hayward', jobTitle: 'Swallow Therapist', pay: 65000, hours: 40, key: 103 },
                    { name: 'Alima Mill', jobTitle: 'Swallow Therapist', pay: 63000, hours: 40, key: 104 },
                    { name: 'Jesus Redmond', jobTitle: 'Transporter', pay: 24000, hours: 40, key: 105 },
                    { name: 'Viktor Beil', jobTitle: 'Transporter', pay: 24000, hours: 40, key: 106 },
                    { name: 'Paloma Vincent', jobTitle: 'Transporter', pay: 24000, hours: 40, key: 107 },
                    { name: 'Kelise Hess', jobTitle: 'Transporter', pay: 24000, hours: 40, key: 108 }
                ]
            },
            {
                name: 'Security',
                key: '10',
                budget: {
                    maxAmount: 125000,
                    used: 56234
                },
                employees: [
                    { name: 'Sasha Johns', jobTitle: 'Director of Secuirity', pay: '22000', hours: 40, key: 109 },
                    { name: 'Zachariah Coffey', jobTitle: 'Secuirity Officer', pay: '18000', hours: 40, key: 110 },
                    { name: 'Tyler Burris', jobTitle: 'Secuirity Officer', pay: '18000', hours: 40, key: 111 },
                    { name: 'Marco Houghton', jobTitle: 'Secuirity Officer', pay: '18000', hours: 40, key: 112 },
                    { name: 'Omer Richardson', jobTitle: 'Secuirity Officer', pay: '18000', hours: 40, key: 113 },
                    { name: 'Barbara Waters', jobTitle: 'Secuirity Officer', pay: '18000', hours: 40, key: 114},
                ]
            },
            {
                name: 'IT',
                key: '11',
                budget: {
                    maxAmount: 1200000,
                    used: 56234
                },
                employees: [
                    { name: 'Taliyah Mill', jobTitle: 'Accounts and Finance', pay: '120000', hours: 40, key: 115 },
                    { name: 'Dawson Frederick', jobTitle: 'HR', pay: '120000', hours: 40, key: 116 },
                    { name: 'Miley Harmon', jobTitle: 'Governance', pay: '120000', hours: 40, key: 117 },
                    { name: 'Bob Zhang', jobTitle: 'Research and Development', pay: '120000', hours: 40, key: 118 },
                    { name: 'Robyn Cote', jobTitle: 'Functionality', pay: '120000', hours: 40, key: 119 },
                    { name: 'Cobie Donovan', jobTitle: 'Infrastructure', pay: '120000', hours: 40, key: 120 },
                    { name: 'Carmel Schwartz', jobTitle: 'Product Development', pay: '120000', hours: 40, key: 121 },
                    { name: 'Conal Drummond', jobTitle: 'Admin Department', pay: '120000', hours: 40, key: 122 },
                    { name: 'Alina Nicholson', jobTitle: 'Application Development', pay: '120000', hours: 40, key: 123 },
                    { name: 'Danniella Glover', jobTitle: 'Technical Support', pay: '120000', hours: 40, key: 124 },
                ]
            },
            {
                name: 'Environmental Services',
                key: '12',
                budget: {
                    maxAmount: 500000,
                    used: 56234
                },
                employees: [
                    { name: 'Jarrad Choi', jobTitle: 'Director of Environmental Services', pay: '55000', hours: 40, key: 125 },
                    { name: 'Jesus Barlow', jobTitle: 'Environmental Services Technician', pay: '55000', hours: 40, key: 126 },
                    { name: 'Haley Pemberton', jobTitle: 'Environmental Services Technician', pay: '55000', hours: 40, key: 127 },
                    { name: 'Darrel Carver', jobTitle: 'Environmental Services Technician', pay: '55000', hours: 40, key: 128 },
                    { name: 'Paolo Palme', jobTitle: 'Environmental Services Technician', pay: '55000', hours: 40, key: 129 },
                    { name: 'Kaylan Velez', jobTitle: 'Environmental Services Technician', pay: '55000', hours: 40, key: 130 },
                    { name: 'Billy Werner', jobTitle: 'Environmental Services Manager', pay: '55000', hours: 40, key: 131 },
                    { name: 'Priyanka Hirst', jobTitle: 'Environmental Services Dispatcher', pay: '55000', hours: 40, key: 132 },
                    { name: 'Jorden Sellers', jobTitle: 'Environmental Services Waste Control', pay: '55000', hours: 40, key: 133 }
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
                <TouchableOpacity onPress={() => navigation.navigate('EmployeePage', item)} style={styles.buttons}>
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