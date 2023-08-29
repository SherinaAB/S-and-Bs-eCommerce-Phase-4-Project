"""adding relationships and foreign keys

Revision ID: 61aaf5f516af
Revises: 1da8a3c160b5
Create Date: 2023-08-29 15:40:49.294398

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '61aaf5f516af'
down_revision = '1da8a3c160b5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('payments')
    op.drop_table('cart_items')
    op.drop_table('users')
    op.drop_table('shopping_sessions')
    op.drop_table('products')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('products',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(length=255), nullable=True),
    sa.Column('desc', sa.VARCHAR(length=255), nullable=True),
    sa.Column('sku', sa.INTEGER(), nullable=True),
    sa.Column('copy', sa.VARCHAR(length=500), nullable=True),
    sa.Column('price', sa.FLOAT(), nullable=True),
    sa.Column('inventory', sa.INTEGER(), nullable=True),
    sa.Column('product_category_id', sa.INTEGER(), nullable=True),
    sa.PrimaryKeyConstraint('id', name='pk_products')
    )
    op.create_table('shopping_sessions',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('total', sa.FLOAT(), nullable=True),
    sa.Column('user_id', sa.INTEGER(), nullable=True),
    sa.Column('cart_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['cart_id'], ['cart_items.id'], name='fk_shopping_sessions_cart_id_cart_items'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='fk_shopping_sessions_user_id_users'),
    sa.PrimaryKeyConstraint('id', name='pk_shopping_sessions')
    )
    op.create_table('users',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('username', sa.VARCHAR(length=255), nullable=False),
    sa.Column('password', sa.VARCHAR(length=255), nullable=True),
    sa.Column('first_name', sa.VARCHAR(length=255), nullable=True),
    sa.Column('last_name', sa.VARCHAR(length=255), nullable=True),
    sa.Column('email', sa.VARCHAR(length=255), nullable=True),
    sa.Column('phone', sa.INTEGER(), nullable=True),
    sa.Column('role', sa.VARCHAR(length=255), nullable=True),
    sa.Column('_password_hash', sa.VARCHAR(), nullable=False),
    sa.Column('user_payment_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['user_payment_id'], ['payments.id'], name='fk_users_user_payment_id_payments'),
    sa.PrimaryKeyConstraint('id', name='pk_users'),
    sa.UniqueConstraint('username', name='uq_users_username')
    )
    op.create_table('cart_items',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('qty', sa.INTEGER(), nullable=False),
    sa.Column('product_id', sa.INTEGER(), nullable=True),
    sa.Column('session_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], name='fk_cart_items_product_id_products'),
    sa.ForeignKeyConstraint(['session_id'], ['shopping_sessions.id'], name='fk_cart_items_session_id_shopping_sessions'),
    sa.PrimaryKeyConstraint('id', name='pk_cart_items')
    )
    op.create_table('payments',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('user_id', sa.INTEGER(), nullable=True),
    sa.Column('payment_type', sa.VARCHAR(length=255), nullable=True),
    sa.Column('provider', sa.VARCHAR(length=100), nullable=True),
    sa.Column('account_no', sa.INTEGER(), nullable=True),
    sa.Column('expiry', sa.DATE(), nullable=True),
    sa.PrimaryKeyConstraint('id', name='pk_payments')
    )
    # ### end Alembic commands ###
