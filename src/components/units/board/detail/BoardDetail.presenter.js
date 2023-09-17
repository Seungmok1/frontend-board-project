import { getDate } from "@/src/commons/library/utils";
import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.BoardWrapper>
        <S.Head>
          <S.Avatar src="/image/avatar.png" />
          <S.WriterWrapper>
            <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
            <S.CreateAt>
              Date : {getDate(props.data?.fetchBoard?.createdAt)}
            </S.CreateAt>
          </S.WriterWrapper>
        </S.Head>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        </S.Body>
      </S.BoardWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickMove}>목록으로</S.Button>
        <S.Button onClick={props.onClickUpdate}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
