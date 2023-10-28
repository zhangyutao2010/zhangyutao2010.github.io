var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array("c++", "oi", "线段树", "哈希", "DP", "KMP", "贪心", "前缀和", "模拟", "ST表", "sort", "二分", "分治", "DFS", "A*", "背包", "BFS", "树状数组", "DAG", "AC自动机", "stack", "数论", "manacher", "trie", "SAM", "快速幂", "Huffman Tree", "queue","割边", "priority_queue","SAT","拓扑排序","prim","Kruskal ","割点","SPFA","","Floyd ","Dinic");
    var $i = $("<span/>").text(a[a_idx]);
    var x = e.pageX,
    y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": "#ff7a45"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function() {
      $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
  });
});
