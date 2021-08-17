import React, { useEffect, useState } from 'react';
import {  FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements';


import { useDispatch, useSelector } from 'react-redux';
import {todaysMedications} from '../api/index';

const styles = StyleSheet.create({
  text:{
      fontWeight: 'bold'
  },
  time: {
    fontWeight: '300',
    color: 'gray'
  },
  time2: {
    fontWeight: '300',
    color: 'gray',
    paddingLeft: 25
  },
  hr: {
    borderColor: '#fff',
    borderWidth: 1,
    width: '80%',
    marginLeft: '10%'
  },
  hr2: {
    borderColor: '#ebeffe',
    borderWidth: 1,
    width: '80%',
    marginLeft: '10%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    padding: 5,
    margin: 10,
    backgroundColor: 'white'
  },
  circleContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  openCircle: {
    marginRight: 15,
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'blue'
  },
  filledCircle: {
    marginRight: 15,
    height: 15,
    width: 15,
  },
  medication: {
    borderWidth: 1,
    borderColor: '#f7f4f4ea',
    padding: 10,
  },
  barContainer: {
    height: 10,
    width: '100%',
    backgroundColor: 'navajowhite'
  },
  buddy: {
    borderWidth: 1,
    borderColor: '#f7f4f4ea',
   
    padding: 10
  },
  button: {
    backgroundColor: 'rgb(92, 124, 250)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgb(92, 124, 250)',
  },
  medview: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '16px',
    width: '359px',
    height: '90px'
  },
  medview2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '16px',
    width: '359px',
    height: '90px'
  },
  innerview: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
  },
  takeButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '0px',
    width: '100px',
    height: '40px',
  },
  medsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25
  }
});

function TakeMeds () {

  // const onPressButton = ()=> {
  //   alert(`Thank you for taking your ${item.name} meds!`)
  // }


  return (
    <View style={styles.section}>
      <View style={styles.medsHeader}>
        <View>
          <Text style={styles.text}>Take your meds</Text>
        </View>
        <View>
          <Button title="Full schedule"   type="clear"  
            icon={
              <Icon
              style={{paddingLeft: 5}}
              name="keyboard-arrow-right"
              size={40}
              color="rgb(92, 124, 250)"
              />
            }
            iconRight 
          />
        </View>
      </View>
      <View style={styles.medview2}>
      <View style={{ flex: 1}}>
      <Text style={styles.text}><Icon name='sunrise' type='feather' color='#ffc453' size='20' style={{paddingTop: 25, paddingRight: 5}}/>Morning Medication</Text>
      <Text style={styles.time2}>6 routine meds</Text>
      
      <View style={styles.circleContainer}>
        <View style={styles.filledCircle}><Icon name='check' type='fontawesome5' color='rgb(92, 124, 250)' size='20'/></View>
        <View style={styles.filledCircle}><Icon name='check' type='fontawesome5' color='rgb(92, 124, 250)' size='20'/></View>
        <View style={styles.filledCircle}><Icon name='check' type='fontawesome5' color='rgb(92, 124, 250)' size='20'/></View>
      </View>
      </View>
      <View style={{ flex: 0.2}}>
      <Icon name='keyboard-arrow-up' color='rgb(13, 13, 14)' size='50' style={{paddingRight: 5}}/>
      </View>
      </View>
      
      
        {todaysMedications.map((item, id)=> (
      <View style={styles.medication}>
            <View key={id} style={styles.medview}>
            <View style={{ flex: 0.1, paddingRight: 5}}>
            <Icon
              name='crop-square' 
              color='rgb(92, 124, 250)'
            />
            </View>
            {/* <View style={styles.innerview}> */}
            <View style={{ flex: 0.9}}>
              <Text style={styles.time}>{item.dueTime}:00 Am  <Icon name='sunrise' type='feather' color='#ffc453' size='20'/></Text>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={{fontWeight: 100}}>Take {item.dosage} {item.dosageType}</Text>
            </View>
            <View style={styles.takeButton}>
              <Button style={styles.button}
               onPress={()=>  alert(`Thank you for taking your ${item.name} medication!`)} 
                icon={
                  <Icon
                  style={{paddingLeft: 5}}
                  name="check"
                  size={15}
                  color="white"
                  />
                }
                iconRight
                title="Take" 
                size='lg'
              />
            </View>
          </View>
        </View>
        ))}
      {/* <View style={styles.medication}>
        <Text>6:00 AM</Text>
        <Text>Magnesium</Text>
        <Text>Take 1 tablet</Text>
        <Button title="Take" />
      </View>
      <View style={styles.medication}>
        <Text>6:00 AM</Text>
        <Text>Prednisolone</Text>
        <Text>Take 1 pill</Text>
        <Button 
        
        title="Take" />
      </View> */}
    </View>
  )
}

function AsNeeded () {
  return (
    <View style={styles.section}>
      <View style={styles.medview}>
        <View style={{ flex: 1, marginLeft: 5}}>
         <Text style={styles.text}>As-needed medication</Text>
         <Text style={{color: '#1AA260'}}><Icon name='check' type='fontawesome5' color='#1AA260' size='20'/>3 of 5 meds okay to take</Text>
        </View>
        <View style={{ flex: 0.2}}>
          <Button title="View"   type="clear"/>
        </View>
      </View>
    </View>
  )
}

function Rewards () {
  return (
    <View style={styles.section}>
      <Text>Earn Rewards</Text>
      <Button title="All Rewards"   type="clear" />
      <Text>80 Points</Text>
      <View style={styles.barContainer}>
        <View style={{ backgroundColor: 'orange', position: 'absolute', width: '20%', height: '100%' }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.filledCircle} />
        <Text>5 Stars earned</Text>
        <Text>Open the app once a day</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.filledCircle} />
        <Text>15 Stars earned</Text>
        <Text>3 meds taken</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.openCircle} />
        <Text>0 Stars earned</Text>
        <Text>Daily health survey</Text>
      </View>
      <Text>Expand</Text>
    </View>
  )
}

function buddyItem ({item: buddy}) {
  return (
    <View key={buddy.id} style={styles.buddy}>
      <Image source={{uri: buddy.avatarUrl}} style={{ height: 40, width: 40 }} />
      <Text>{buddy.name}</Text>
      <Text>All-time adherence</Text>
      <Text>{String(buddy.adherence).slice(0, 2)}%</Text>
    </View>
  )
}

function Buddies () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_BUDDIES' })
  }, [])
  const buddyList = useSelector(state => state.buddies)

  return (
    <View style={styles.section}>
      <Text>Check on buddies</Text>
      <Button title="All buddies"   type="clear"/>
      <FlatList
        data={buddyList.slice(0,3)}
        renderItem={buddyItem}
        keyExtractor={buddy => String(buddy.id)}
      />
    </View>
  )
}

function RecentHistory () {
  return (
    <View style={styles.section}>
      <Text>Past 7 days</Text>
      <Button title="Medication history"   type="clear"/>
      <Text>Medication Progress</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.historyDay}>
          <Text>Th</Text>
          <Text>12</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Fri</Text>
          <Text>13</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '100%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Sat</Text>
          <Text>14</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '100%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Sun</Text>
          <Text>15</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Mon</Text>
          <Text>16</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Tues</Text>
          <Text>17</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Wed</Text>
          <Text>18</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
          </View>
        </View>
      </View>
    </View>
  )
}

function DashboardScreen () {
  return (
    <ScrollView>
      <TakeMeds />
      <View style={styles.hr} />
      <AsNeeded />
      <View style={styles.hr} />
      <Rewards />
      <View style={styles.hr} />
      <Buddies />
      <View style={styles.hr} />
      <RecentHistory />
    </ScrollView>
  );
}

export default DashboardScreen