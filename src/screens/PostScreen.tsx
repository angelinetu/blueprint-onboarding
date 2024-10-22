import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import supabase from 'supabase/client';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import { styles } from './styles'; 

export default function PostScreen() {
  interface Post {
    id: number;
    created_at: string;
    description: string;
    username: string;
    image_url: string;
    like_count: number;
  }

  const getPostData = async (): Promise<Post[]> => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('username', 'rbeggs');

    if (error) {
      throw new Error(`Error fetching post: ${error.message}`);
    }
    return data as Post[];
  };

  const [postData, setPostData] = useState<Post[]>([]);

  useEffect(() => {
    fetchPostData();
  }, []);

  const fetchPostData = async () => {
    try {
      const data = await getPostData();
      setPostData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      {postData.map((post) => (
        <View key={post.id}>
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ProfilePlaceholder style={styles.profileIcon} />
              <Text style={styles.profileName}>{post.username}</Text>
            </View>
            <Text style={styles.postDate}>
              {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
          </View>

          {/* Post Text */}
          <View style={styles.postTextContainer}>
            <Text style={styles.postText}>{post.description}</Text>
          </View>

          {/* Post Image */}
          {post.image_url ? (
            <Image source={{ uri: post.image_url }} style={styles.postImage} />
          ) : null}

          {/* Interaction Row */}
          <View style={styles.interactionRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <HeartIcon style={styles.icon} />
              <Text style={styles.likesText}>{post.like_count} Likes</Text>
            </View>
            <ShareIcon style={styles.icon} />
          </View>

          {/* Comment Section */}
          <View style={styles.commentSection}>
            {/* First Comment */}
            <View style={styles.comment}>
              <ProfilePlaceholder style={styles.commentIcon} />
              <View style={styles.commentBody}>
                <View style={styles.commentHeader}>
                  <Text style={styles.commentName}>philip_ye</Text>
                  <Text style={styles.commentDate}>September 20</Text>
                </View>
                <Text style={styles.commentText}>
                  This organization is doing amazing work tackling the complex root causes of the issue.
                </Text>
              </View>
            </View>

            {/* Second Comment */}
            <View style={styles.comment}>
              <ProfilePlaceholder style={styles.commentIcon} />
              <View style={styles.commentBody}>
                <View style={styles.commentHeader}>
                  <Text style={styles.commentName}>vppraggie</Text>
                  <Text style={styles.commentDate}>September 21</Text>
                </View>
                <Text style={styles.commentText}>Thanks for sharing!</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
