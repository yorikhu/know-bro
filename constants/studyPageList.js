const studyPageList = [
  {
    title: '为什么 python 内置的 sort 比自己写的快速排序快 100 倍？',
    detail:
      '主要原因，内置函数用C写的。在Python语言内无论如何造不出内置函数的轮子。 这也是通常C跟C++语言用户更喜欢造基础算法的轮子的原因。因为C/C++用户真有条件写出匹敌标准库的算法，但很多高级语言不行，不是程序员技术差，是客观条件就根本做不到。 你比如说Java语言没人造字符串的轮子，C++光一个字符串类就有无数多的实现。是因为C++用户更喜欢写字符串类吗？显然不是，一方面是因为Java语言内没法造出匹敌Java内置标准库算法…',
    good: '765',
    comment: '76',
  },
  {
    title: '请分享一下数据分析方面的思路，如何做好数据分析？',
    detail:
      '这里给大家介绍我们数据分析师最常用的 9 种方法，每种方法对应不同的场景。学会下面这几个，几乎所有的数据分析场景都能轻松驾驭！一、公式拆解所谓公式拆解法就是针对某个指标，用公式层层分解该指标的影响因素。 举例：分析某产品的销售额较低的原因，用公式法分解 [图片] 二、对比分析 对比法就是用两组或两组以上的数据进行比较，是最通用的方法。 我们知道孤立的数据没有意义，有对比才有差异。比如在时间维度上的同比和环比、增长…',
    good: '52',
    comment: '1',
  },
  {
    title: '雅思写作应该如何提高呢?',
    detail:
      '雅思写作想要得到提高，要分三步走：积累词汇、积累素材、构建逻辑。我曾任曼彻斯特大学语言课程老师，同时也是前雅思考官，将展开针对性地介绍这3部分的内容。 【一】词汇的积累雅思写作最基础的部分就是词汇。针对英语基础较薄弱、考试经验较欠缺的同学，不管是听说还是读写，单词的储备都是很必要的，毕竟没有输入就很难有输出。 单词的记忆是有技巧的。 看到一个新的单词，首先根据音标将它大声地读出来，然后仔细阅读它的中…',
    good: '15',
    comment: '1',
  },
  {
    title: '新手该从何开始学习视频剪辑呢？',
    detail:
      '首先要先确定学剪辑的目的再定计划： 如果是个人娱乐，会个剪映或PR，然后就随意来，剪出来自己看着开心就好。 如果是想吃剪辑这碗饭，成为专业剪辑师，或者接剪辑商单赚钱。就要认真计划了。基本上现在就算是短视频剪辑的商单，很多甲方还是要求会PR+AE。手机APP能处理的根本达不到商业片的效果。更别说要求情节特效啥的了，更卷的还要求输出脚本创意。接下来就按照专业剪辑的要求分析下要学…',
    good: '274',
    comment: '5',
  },
  {
    title: '教资中学科二《教育知识与能力》简答题汇总来啦',
    detail:
      '各位小伙伴，大家最近复习得怎么样？小7听说大家有点焦躁，感觉科目二要背的东西太多，当然这还不是最焦躁的，最焦躁的是不知道哪里是重点，需要背哪些，不要担心，以下为大家 分模块整理出了科二简答题不得不背的考点，大家可以对照自己的教材，好好归纳总结一下，把分拿到手~ （注：本文较长，需要资料的可以拉到文末看电子资料的领取方式哦）…',
    good: '5137',
    comment: '131',
  },
  {
    title: '法考主观题怎么准备？',
    detail:
      '我是19年（法考改革的第二年）一次性通过法考客观及主观题考试的，距离现在不算太久，很多场景都还历历在目。 其实我是财务专业出身，也没有从事法律相关工作，备考的状态是边工作边带娃再兼顾这个考试，所以从这个角度来看，我觉得我的那些备考技巧还是有点价值的。 法考经历一直是我的一个骄傲， 不仅是因为最后结果通过了，而且是以花费最小“成本”的方式通过的。所以分享出来，同学们共勉！ 一、不要把复习的希…',
    good: '522',
    comment: '11',
  },
  {
    title: '报的国考岗位录取比1300比1，我还有必要去考试吗？（详见补充说明）?',
    detail:
      '先说结论：去，一定要去，一定不要放弃。说实话，每年的公务员考试尤其是国考中，和你有同样想法的人太多了。 要么就是觉得自己没有准备好、没复习好，不去；要么就是觉得报录比太高、希望不大，不去；要么就是觉得国考岗位不好，不想报名，等着来年省考再考。 很遗憾，绝大多数持这样想法的人，最终都没有考上公务员。 能这样想，说明你还没有搞…',
    good: '12',
    comment: '5',
  },
  {
    title: '如何突出显示重点数据？',
    detail:
      '[图片] 前些天，仓储部的小妹跑过来问我，年末了要进行仓库盘点，怎样才能快速地让表格里各种产品的重点数据突出显示？ 我一开始还纳闷了，排个序不就行了吗，后来拿到表格才知道为什么不能简单排序。 因为每个大产品类别下，才是二级产品的明细数据，这种表格直接排序是行不通的，因为前面有合并列。 那怎样才能实现重点数据突出显示呢？ 类…',
    good: '221',
    comment: '132',
  },
  {
    title: '做数据分析不得不看的书有哪些？',
    detail:
      '书不在多，而在于精。下面从数据分析招聘要求的必须技能：统计学，Excel，SQL，业务知识，Python这5个部分来详细聊聊每一步如何去学习和看哪些书 [图片] 第1步：统计学 1）统计学有什么用呢？请给我一个学习的理由如果你打开招聘的职位要求，都会要求具有统计学的知识，这是因为统计学是数据分析、机器学习的基础知识，是必须要学习的。 …',
    good: '92',
    comment: '12',
  },
  {
    title: 'Java为什么不让用指针？',
    detail:
      '在大概上个世纪90年代到2010年左右的一段时间内，java的流行范围不像现在那样大，那个时候还有C++等开发语言，比如是MFC，而C++是支持指针的。 不过，正是因为C++支持指针，允许程序员用指针访问内存，这反而…',
    good: '102',
    comment: '10',
  },
];

export default studyPageList;