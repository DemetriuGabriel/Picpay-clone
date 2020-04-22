import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 8,
  }
}))`
  margin-top: 20px;
`;

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }) => bgColor};
  width: 120px;
  height: 200px;
  border-radius: 8px;
  padding: 13px;
  justify-content: space-between;
  margin-right: 13px;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;
export const Img = styled.Image`
  align-self: center;
`;