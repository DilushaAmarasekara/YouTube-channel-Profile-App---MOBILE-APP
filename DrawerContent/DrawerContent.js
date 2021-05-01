import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  Text,
} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import {Icon} from 'react-native-vector-icons/icon';
import {AuthContext} from '../Component/context';
export function DrawerContent(props) {
  const paperTheme = useTheme();
  const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://miro.medium.com/fit/c/262/262/1*ocgYustWirrKHu-yyHb0TQ.jpeg',
                }}
                size={50}
              />
              <View style={{flexDirection: 'column', marginLeft: 3}}>
                <Title style={styles.title}>Dilusha Amarasekara</Title>
                <Caption style={styles.caption}>@Dilu1997</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  141
                </Paragraph>
                <Caption style={styles.caption}>Subscribers</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  4185
                </Paragraph>
                <Caption style={styles.caption}>Likes</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="user-circle" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('ProfileDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="info-circle" color={color} size={size} />
              )}
              label="Detail"
              onPress={() => {
                props.navigation.navigate('DetailDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="cogs" color={color} size={size} />
              )}
              label="Setting"
              onPress={() => {
                props.navigation.navigate('SettingDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="headset" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme()
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <FontAwesome5 name="sign-out-alt" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut()
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 3,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
});
