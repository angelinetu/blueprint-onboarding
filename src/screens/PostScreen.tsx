import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import { styles } from './styles';

export default function PostScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <ProfilePlaceholder style={styles.profileIcon} />
        <View>
          <Text style={styles.profileName}>rbeggs</Text>
          <Text style={styles.postDate}>September 19</Text>
        </View>
      </View>

      {/* Post Content */}
      <Text style={styles.postText}>
        In response to the growing homelessness crisis in San Francisco, a local
        nonprofit organization, Code Tenderloin, has launched a comprehensive
        initiative aimed at providing long-term solutions for individuals
        experiencing homelessness. The organization, founded in 2015, is
        dedicated to addressing both immediate needs and underlying causes of
        homelessness through a combination of shelter services, job training
        programs, and mental health support.
      </Text>

      {/* External Link */}

      <Text style={styles.linkText}>
        read more online: https://www.codetenderloin.org/
      </Text>

      {/* Post Image */}
      <Image
        style={styles.postImage}
        source={{
          uri: 'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg',
        }}
      />

      {/* Like and Share Section */}
      <View style={styles.interactionRow}>
        <HeartIcon style={styles.icon} />
        <Text style={styles.likesText}>256 Likes</Text>
        <ShareIcon style={styles.icon} />
      </View>

      {/* Comments */}
      <View style={styles.commentSection}>
        <View style={styles.comment}>
          <ProfilePlaceholder style={styles.commentIcon} />
          <View>
            <Text style={styles.commentName}>philip_ye</Text>
            <Text style={styles.commentText}>
              This organization is doing amazing work tackling the complex root
              causes of the issue.
            </Text>
          </View>
        </View>
        <View style={styles.comment}>
          <ProfilePlaceholder style={styles.commentIcon} />
          <View>
            <Text style={styles.commentName}>vppraggie</Text>
            <Text style={styles.commentText}>Thanks for sharing!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
