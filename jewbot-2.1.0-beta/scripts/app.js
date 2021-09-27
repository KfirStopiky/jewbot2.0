/**
 * DEMO ONLY
 */

// View redirect
document.querySelector('#view_swap').onclick = () => location.href = 'swap.html';
document.querySelector('#view_scan').onclick = () => location.href = 'scan.html';
document.querySelector('#view_shop').onclick = () => location.href = 'shop.html';

/* Modal toggle */

document.querySelectorAll('[data-toggle]').forEach(function (modalButton) {
    modalButton.addEventListener('click', function (event) {
        var modal = document.getElementById(modalButton.dataset.toggle);
        modal.classList.toggle('hidden');
        modalButton.blur();
    });
});

document.addEventListener('click', function (e) {

    /* Toggle button */

    if (e.target.matches('.btn-toggle')) {
        if (e.target.classList.contains('btn-toggle-binary')) {
            e.target.innerText = e.target.innerText === 'OFF' ? 'ON' : 'OFF';
        }
        e.target.classList.toggle('active');
        e.target.blur();
        return;
    }

    /* "Connect Wallet" and "Disconnect Wallet" */

    if (e.target.matches('#connect_wallet_header')) {
        e.target.classList.add('hidden');
        document.querySelector('#disconnect_wallet_header').classList.remove('hidden');
        return;
    }
    if (e.target.matches('#disconnect_wallet_header')) {
        e.target.classList.add('hidden');
        document.querySelector('#connect_wallet_header').classList.remove('hidden');
        return;
    }

    /* Loading animation test */

    if (e.target.matches('#connect_wallet_main')) {
        if (e.target.innerText == 'CONNECT WALLET') {
            e.target.innerHTML = '<div class="loader"><div></div><div></div><div></div><div></div></div>';
        } else {
            e.target.innerText = 'CONNECT WALLET';
        }
        return;
    }

    /* Swap icon change on token select */

    if (e.target.matches('#select_token')) {
        e.target.querySelector('img').classList.toggle('hidden');
        e.target.querySelector('svg').classList.toggle('hidden');
        return;
    }

    /* "Add target" in transaction modal */

    var target_html = `
    <div class="multiple-input-groups">
        <div class="input-group has-addon is-invalid">
            <input class="form-control" placeholder="0">
            <div class="addon">X</div>
        </div>

        <div class="input-group has-addon is-invalid">
            <input class="form-control" placeholder="0">
            <div class="addon">%</div>
        </div>

        <div class="input-group">
            <button class="btn btn-icon btn-remove-target">
                <svg class="icon">
                    <use xlink:href="#icon_trash"/>
                </svg>
            </button>
        </div>
    </div>`;
    if (e.target.matches('#add_target')) {
        e.target.insertAdjacentHTML('beforebegin', target_html);
        return;
    }
    if (e.target.matches('.btn-remove-target')) {
        e.target.closest('.multiple-input-groups').remove();
        return;
    }

    /* Stream, wallet and trades tabs */

    let stream = document.querySelector('#stream');
    let wallet = document.querySelector('#wallet');
    let trades = document.querySelector('#trades');
    if (e.target.matches('#tab_stream')) {
        stream.classList.remove('hidden');
        wallet.classList.add('hidden');
        trades.classList.add('hidden');
        return;
    }
    if (e.target.matches('#tab_wallet')) {
        stream.classList.add('hidden');
        wallet.classList.remove('hidden');
        trades.classList.add('hidden');
        return;
    }
    if (e.target.matches('#tab_trades')) {
        stream.classList.add('hidden');
        wallet.classList.add('hidden');
        trades.classList.remove('hidden');
        return;
    }

});

/* Multi switch "Kosherness Settings" */

document.querySelector('#toggle_kosherness_settings').addEventListener('click', function (e) {
    this.classList.toggle('active');
    this.blur();
    document.querySelector('#kosherness_settings').classList.toggle('hidden');
});

document.querySelector('#kosherness_settings .multi-switch').addEventListener('click', function (e) {
    var textarea = document.querySelector('#kosherness_exceptions');
    var buttons = this.querySelectorAll('button');
    buttons.forEach(function (button) {
        if (button === e.target) {
            if (button.innerText === 'Jewbot') {
                textarea.classList.add('hidden')
            } else {
                textarea.classList.remove('hidden')
            }
        } else {
            button.classList.remove('active');
        }
    });
});