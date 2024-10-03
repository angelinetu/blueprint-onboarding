import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postDate: {
    color: 'gray',
  },
  postText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  linkText: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  interactionRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  likesText: {
    marginRight: 20,
  },
  commentSection: {
    marginTop: 20,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  commentName: {
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 14,
    lineHeight: 18,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },
});
