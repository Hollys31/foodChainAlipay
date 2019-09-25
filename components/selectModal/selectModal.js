Component({
  mixins: [],
  data: {},
  props: {
    varietyHidden: true,
    varity: [],
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    closeModal: function (e) {//关闭菜品批次选择
      this.props.onChangeVisual('true');
    },
  },
});
