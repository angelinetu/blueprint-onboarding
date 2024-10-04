import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'space-between',
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
  postTextContainer: {
    marginBottom: 10,
  },
  postText: {
    fontSize: 14,
    lineHeight: 20,
  },
  inlineLink: {
    fontSize: 14,
    color: 'black',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  icon: {
    marginRight: 8,
  },
  likesText: {
    marginLeft: 5,
  },
  commentSection: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
    marginTop: 20,
    paddingRight: 10,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    rowGap: 10,
    paddingRight: 10,
  },
  commentIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    columnGap: 10,
  },
  commentName: {
    fontWeight: 'bold',
  },
  commentDate: {
    color: 'gray',
    paddingRight: 15,
  },
  commentTextContainer: {
    marginTop: 4,
  },
  commentText: {
    fontSize: 14,
    lineHeight: 18,
  },
});
