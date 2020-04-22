import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() =>({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 12,
  },
}))`
  background: #1e222b;
  height: 130px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 12px;
  align-items: center;
`;
export const Img = styled.Image``;
export const Label = styled.Text`
  color: #FFF;
  font-weight: bold;
  margin-top: 5px;
  font-size: 13px;
`;