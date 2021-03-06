define(['core/Node'], function(Node) {
	return class Graph {
		constructor() {
			this.nodes = [];
			this.edges = [];
		}

		load(data) {
			console.log("Loading...");
			console.log(data);

			for (var key in data.nodes) {
				var node = data.nodes[key];
				this.nodes.push(new Node(node.id, node.x, node.y, this));
			}
			console.log("loaded all data: ");
			console.log(this.nodes);
		}

		addNode(id, x, y) {
			this.nodes.push(new Node(id, x, y, this));
		}

		addEdge(source, target, weight) {
			var newEdge = {source: source, target: target, weight: weight};
			source.addEdge(newEdge)
			target.addEdge(newEdge)
			this.edges.push(newEdge);
		}

		totalWeight() {
			var sum = 0;
			for (var key in this.edges) {
				sum += this.edges[key].weight
			}
			return sum;
		}
		
		clearEdges() {
			for (var key in this.nodes) {
				var n = this.nodes[key];
				n.edges = [];
			}
			this._edges = [];
		}

		set nodes(n) {
	    this._nodes = n;
	  }
		get nodes() {
	    return this._nodes;
	  }

	  set edges(e) {
	  	this._edges = e;
	  }
	  get edges() {
	  	return this._edges;
	  }
	  toJson() {
	  	return {
	  		nodes: this.nodes,
	  		edges: this.edges
	  	}
	  }
	}
})