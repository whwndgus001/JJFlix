import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  // 생성자에서 할 일
  // 영화 상세 페이지를 표현해야 하는지 설정
  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    // id 가지고 오기 -> match.params
    // 만약에 id가 안들어오면 HOME으로 강제 이동 -> history의 push함수가 해준다.
    // 사용자의 요청을 서버가 받고, 재요청 하도록 하는 것을 redirect라고 한다.

    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const { isMovie } = this.state;
    const parsedId = parseInt(id);

    // 올바르지 않은 id라면
    if (isNaN(parsedId)) {
      //Home으로 redirect
      return push("/");
    }

    let result = null;

    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch (error) {
      this.setState({
        error: "아무것도 찾을 수가 없어요",
      });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  //함수형 컴포넌트에서 return에 해당된다.
  render() {
    const { result, error, loading } = this.state;

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
